"use client";

import { Box, VStack, Input, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function UserDetailsSelection({
  details,
  onChange,
}: {
  details: { name: string; email: string; phone: string };
  onChange: (details: { name: string; email: string; phone: string }) => void;
}) {
  const t = useTranslations("Demo");

  return (
    <VStack align="stretch" gap={6} w="full">
      <Box>
        <Text fontWeight="bold" color="brand.900" mb={2}>
          {t("fullName")}
        </Text>
        <Input
          placeholder={t("namePlaceholder")}
          value={details.name}
          onChange={(e) => onChange({ ...details, name: e.target.value })}
          size="lg"
          borderRadius="xl"
          bg="white"
          borderColor="gray.200"
          _hover={{ borderColor: "brand.300" }}
          _focus={{ borderColor: "brand.500", boxShadow: "outline" }}
        />
      </Box>

      <Box>
        <Text fontWeight="bold" color="brand.900" mb={2}>
          {t("emailAddress")}
        </Text>
        <Input
          type="email"
          placeholder={t("emailPlaceholder")}
          value={details.email}
          onChange={(e) => onChange({ ...details, email: e.target.value })}
          size="lg"
          borderRadius="xl"
          bg="white"
          borderColor="gray.200"
          _hover={{ borderColor: "brand.300" }}
          _focus={{ borderColor: "brand.500", boxShadow: "outline" }}
        />
      </Box>

      <Box>
        <Text fontWeight="bold" color="brand.900" mb={2}>
          {t("phoneNumber")}
        </Text>
        <Input
          type="tel"
          placeholder={t("phonePlaceholder")}
          value={details.phone}
          onChange={(e) => onChange({ ...details, phone: e.target.value })}
          size="lg"
          borderRadius="xl"
          bg="white"
          borderColor="gray.200"
          _hover={{ borderColor: "brand.300" }}
          _focus={{ borderColor: "brand.500", boxShadow: "outline" }}
        />
      </Box>
    </VStack>
  );
}
