"use client";

import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { CalendarDays, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import type { ComponentProps } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerBody,
} from "@/components/ui/drawer";

const MotionBox = motion.create(Box);

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setElevated(latest > 20);
  });

  const navLinks = [
    { name: t("features"), href: "#features" },
    { name: t("useCases"), href: "#use-cases" },
    { name: t("pricing"), href: "#pricing" },
    { name: t("faq"), href: "#faq" },
  ];

  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      bg={elevated ? "rgba(247, 248, 240, 0.85)" : "transparent"}
      backdropFilter={elevated ? "blur(12px)" : "none"}
      borderBottom={elevated ? "1px solid" : "none"}
      borderColor="whiteAlpha.300"
      boxShadow={elevated ? "sm" : "none"}
      css={{
        transitionProperty:
          "background-color, backdrop-filter, box-shadow, border-color",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        {/* Logo Section */}
        <Link href="/">
          <HStack gap={2} cursor="pointer">
            <MotionBox
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CalendarDays color="#355872" size={32} />
            </MotionBox>
            <Text
              fontSize="2xl"
              fontWeight="900"
              color="brand.900"
              letterSpacing="tight"
            >
              OctoBook
            </Text>
          </HStack>
        </Link>

        {/* Desktop Links */}
        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href as ComponentProps<typeof Link>["href"]}
            >
              <Text
                fontWeight="600"
                color="brand.900"
                _hover={{ color: "brand.500" }}
                transition="colors 0.2s"
              >
                {link.name}
              </Text>
            </Link>
          ))}
        </HStack>

        {/* CTA & Lang Switcher */}
        <HStack gap={4} display={{ base: "none", md: "flex" }}>
          <LanguageSwitcher />
          <Link href="/demo">
            <Button
              bg="brand.900"
              color="white"
              size="md"
              borderRadius="full"
              px={6}
              fontWeight="bold"
              _hover={{
                bg: "brand.500",
                transform: "translateY(-2px)",
                boxShadow: "md",
              }}
              transition="all 0.2s"
            >
              {t("bookNow")}
            </Button>
          </Link>
        </HStack>
        {/* Mobile menu trigger and drawer */}
        <Box display={{ base: "block", md: "none" }}>
          <DrawerRoot
            placement="start"
            size="full"
            open={mobileMenuOpen}
            onOpenChange={(e) => setMobileMenuOpen(e.open)}
          >
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                p={2}
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              >
                <Menu size={28} color="#355872" />
              </Button>
            </DrawerTrigger>

            {/* Full-screen cinematic menu content */}
            <DrawerContent bg="brand.900" color="white" h="100dvh">
              {/* Custom Close Button */}
              <IconButton
                position="absolute"
                top={6}
                right={6}
                variant="ghost"
                color="white"
                size="lg"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </IconButton>

              <DrawerBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                pb={20}
              >
                <VStack gap={10} w="full">
                  <HStack gap={3} justify="center" mb={4}>
                    <CalendarDays color="white" size={40} />
                    <Text
                      fontSize="4xl"
                      fontWeight="900"
                      color="white"
                      letterSpacing="tight"
                    >
                      OctoBook
                    </Text>
                  </HStack>

                  {navLinks.map((link) => (
                    <Box key={link.name}>
                      <Link
                        href={link.href as ComponentProps<typeof Link>["href"]}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Text
                          fontWeight="900"
                          fontSize="3xl"
                          color="white"
                          _hover={{
                            color: "brand.300",
                            transform: "scale(1.05)",
                          }}
                          transition="all 0.2s"
                          textAlign="center"
                        >
                          {link.name}
                        </Text>
                      </Link>
                    </Box>
                  ))}

                  <Box w="20%" h="2px" bg="whiteAlpha.300" my={4} />

                  <Box
                    bg="whiteAlpha.200"
                    borderRadius="xl"
                    p={2}
                    w="full"
                    maxW="200px"
                    display="flex"
                    justifyContent="center"
                  >
                    <LanguageSwitcher isDark />
                  </Box>

                  <Link
                    href="/demo"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      width: "80%",
                      maxWidth: "300px",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                      w="full"
                      bg="white"
                      color="brand.900"
                      size="xl"
                      py={6}
                      borderRadius="xl"
                      fontWeight="900"
                      fontSize="xl"
                      _hover={{ bg: "brand.50", transform: "translateY(-4px)" }}
                      boxShadow="xl"
                      transition="all 0.3s"
                    >
                      {t("bookNow")}
                    </Button>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </Box>
      </Flex>
    </MotionBox>
  );
}
