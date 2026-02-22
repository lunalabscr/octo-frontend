import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Provider } from "@/components/ui/provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | OctoBook",
    default: "OctoBook | The Robust Booking SaaS Platform",
  },
  description:
    "Streamline your business with OctoBook. Analytics, smart reservations, staff management, interactive calendars, and automated notifications all in one platform.",
  keywords: [
    "Booking Software",
    "SaaS",
    "Appointment Scheduling",
    "Salon Booking",
    "Clinic Software",
    "Gym Reservations",
    "OctoBook",
  ],
  authors: [{ name: "OctoBook Team", url: "https://octobook.demo" }],
  creator: "OctoBook",
  publisher: "OctoBook Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://octobook.demo"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      es: "/es",
    },
  },
  openGraph: {
    title: "OctoBook | The Robust Booking SaaS Platform",
    description:
      "A complete suite of tools built specifically for appointment-based businesses. Let customers book 24/7 with zero double-bookings.",
    url: "https://octobook.demo",
    siteName: "OctoBook",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "OctoBook Dashboard Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OctoBook | The Robust Booking SaaS Platform",
    description:
      "A complete suite of tools built specifically for appointment-based businesses. Let customers book 24/7 with zero double-bookings.",
    creator: "@octobook",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${roboto.variable}`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
