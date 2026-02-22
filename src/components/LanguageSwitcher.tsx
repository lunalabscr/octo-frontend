import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@chakra-ui/react";
import { Globe, ChevronDown } from "lucide-react";
import { useTransition } from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";

interface LanguageSwitcherProps {
  isDark?: boolean;
}

export default function LanguageSwitcher({
  isDark = false,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const handleLocaleChange = (nextLocale: string) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="ghost"
          disabled={isPending}
          display="flex"
          alignItems="center"
          gap={2}
          color={isDark ? "white" : "brand.900"}
          _hover={{
            bg: isDark ? "whiteAlpha.200" : "brand.100",
            color: isDark ? "white" : "brand.900",
          }}
          borderRadius="full"
          px={3}
          size="sm"
          _active={{ bg: isDark ? "whiteAlpha.300" : "brand.100" }}
        >
          <Globe size={18} />
          {locale === "en" ? "EN" : "ES"}
          <ChevronDown size={14} />
        </Button>
      </MenuTrigger>
      <MenuContent
        minW="120px"
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        p={1}
      >
        <MenuItem
          value="en"
          onClick={() => handleLocaleChange("en")}
          cursor="pointer"
          borderRadius="md"
          _hover={{ bg: "brand.50" }}
          color={locale === "en" ? "brand.500" : "brand.900"}
          fontWeight={locale === "en" ? "bold" : "medium"}
        >
          English (EN)
        </MenuItem>
        <MenuItem
          value="es"
          onClick={() => handleLocaleChange("es")}
          cursor="pointer"
          borderRadius="md"
          _hover={{ bg: "brand.50" }}
          color={locale === "es" ? "brand.500" : "brand.900"}
          fontWeight={locale === "es" ? "bold" : "medium"}
        >
          Español (ES)
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}
