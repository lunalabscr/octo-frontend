"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { CalendarDays, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { ComponentProps } from "react";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  const links = [
    { name: tNav("features"), href: "#features" },
    { name: tNav("useCases"), href: "#use-cases" },
    { name: tNav("pricing"), href: "#pricing" },
    { name: tNav("faq"), href: "#faq" },
  ];

  return (
    <Box bg="brand.900" color="brand.50" py={{ base: 12, md: 16 }}>
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction="column"
        gap={12}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {/* Brand & About */}
          <VStack align="flex-start" gap={4}>
            <HStack gap={2}>
              <CalendarDays color="#9CD5FF" size={28} />
              <Text
                fontSize="2xl"
                fontWeight="bold"
                letterSpacing="tight"
                color="brand.100"
              >
                OctoBook
              </Text>
            </HStack>
            <Text
              fontSize="md"
              color="whiteAlpha.800"
              maxW="sm"
              lineHeight="tall"
            >
              {t("description")}
            </Text>
            <HStack gap={4} mt={2}>
              <Box
                asChild
                _hover={{ color: "brand.100" }}
                transition="colors 0.2s"
              >
                <a href="#">
                  <Github size={20} />
                </a>
              </Box>
              <Box
                asChild
                _hover={{ color: "brand.100" }}
                transition="colors 0.2s"
              >
                <a href="#">
                  <Twitter size={20} />
                </a>
              </Box>
              <Box
                asChild
                _hover={{ color: "brand.100" }}
                transition="colors 0.2s"
              >
                <a href="#">
                  <Linkedin size={20} />
                </a>
              </Box>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" gap={4}>
            <Text fontSize="lg" fontWeight="semibold" color="white">
              {t("links")}
            </Text>
            <VStack align="flex-start" gap={2}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href as ComponentProps<typeof Link>["href"]}
                >
                  <Text
                    color="whiteAlpha.800"
                    _hover={{ color: "brand.100", textDecoration: "none" }}
                    transition="colors 0.2s"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </VStack>

          {/* Newsletter */}
          <VStack align="flex-start" gap={4}>
            <Text fontSize="lg" fontWeight="semibold" color="white">
              {t("newsletter")}
            </Text>
            <Text fontSize="sm" color="whiteAlpha.800">
              {t("subscribe")}
            </Text>
            <HStack w="full" maxW="sm">
              <Input
                placeholder={t("emailPlaceholder")}
                bg="whiteAlpha.200"
                border="none"
                color="white"
                _placeholder={{ color: "whiteAlpha.500" }}
                _focus={{
                  ring: 2,
                  ringColor: "brand.100",
                  bg: "whiteAlpha.300",
                }}
                borderRadius="md"
              />
              <Button
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.100", color: "brand.900" }}
                transition="all 0.2s"
                borderRadius="md"
              >
                {t("subscribeBtn")}
              </Button>
            </HStack>
          </VStack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderColor="whiteAlpha.200" pt={8} w="full">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize="sm" color="whiteAlpha.600">
              © {new Date().getFullYear()} OctoBook. {t("rights")}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
