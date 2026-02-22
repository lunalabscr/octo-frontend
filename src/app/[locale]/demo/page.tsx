import { setRequestLocale } from "next-intl/server";
import DemoFlow from "@/components/demo/DemoFlow";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DemoFlow />;
}
