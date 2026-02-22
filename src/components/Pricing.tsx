"use client";

import {
  Box,
  Flex,
  Text,
  VStack,
  Badge,
  SimpleGrid,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const MotionBox = motion.create(Box);

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      id: "starter",
      name: t("starter.name"),
      price: t("starter.price"),
      desc: t("starter.desc"),
      features: t.raw("starter.features") as string[],
      isFeatured: false,
      cta: t("cta"),
    },
    {
      id: "pro",
      name: t("pro.name"),
      price: t("pro.price"),
      desc: t("pro.desc"),
      features: t.raw("pro.features") as string[],
      isFeatured: true,
      cta: t("cta"),
    },
    {
      id: "enterprise",
      name: t("enterprise.name"),
      price: t("enterprise.price"),
      desc: t("enterprise.desc"),
      features: t.raw("enterprise.features") as string[],
      isFeatured: false,
      cta: t("contact"),
    },
  ];

  return (
    <Box
      id="pricing"
      py={{ base: 20, md: 32 }}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        bottom="-20%"
        left="-10%"
        w="600px"
        h="600px"
        bg="brand.100"
        opacity={0.3}
        filter="blur(80px)"
        borderRadius="full"
        zIndex={0}
      />

      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction="column"
        align="center"
        gap={16}
        position="relative"
        zIndex={10}
      >
        <VStack align="center" gap={4} maxW="3xl" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              colorScheme="blue"
              bg="brand.100"
              color="brand.900"
              px={3}
              py={1}
              borderRadius="full"
            >
              {t("badge")}
            </Badge>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="brand.900"
              letterSpacing="tight"
            >
              {t("title")}
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600">
              {t("subtitle")}
            </Text>
          </MotionBox>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          gap={8}
          w="full"
          alignItems="center"
        >
          {plans.map((plan, i) => (
            <MotionBox
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <VStack
                align="flex-start"
                p={8}
                bg={plan.isFeatured ? "brand.900" : "white"}
                color={plan.isFeatured ? "white" : "gray.800"}
                borderRadius="3xl"
                boxShadow={plan.isFeatured ? "md" : "sm"}
                border="2px solid"
                borderColor={plan.isFeatured ? "brand.500" : "gray.100"}
                minH={plan.isFeatured ? "600px" : "auto"}
                py={plan.isFeatured ? 12 : 8}
                transform={plan.isFeatured ? "scale(1.05)" : "none"}
                _hover={{
                  transform: plan.isFeatured ? "scale(1.06)" : "scale(1.02)",
                }}
                transition="all 0.3s ease"
                gap={6}
                position="relative"
                overflow="hidden"
              >
                {plan.isFeatured && (
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    h="4px"
                    bg="brand.500"
                  />
                )}

                <VStack align="flex-start" gap={2}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={plan.isFeatured ? "brand.100" : "brand.900"}
                  >
                    {plan.name}
                  </Text>
                  <Text color={plan.isFeatured ? "whiteAlpha.800" : "gray.600"}>
                    {plan.desc}
                  </Text>
                </VStack>

                <HStack align="baseline" gap={2}>
                  <Text fontSize="5xl" fontWeight="900" letterSpacing="tighter">
                    {plan.price}
                  </Text>
                  {plan.price !== "Custom" &&
                    plan.price !== "Personalizado" && (
                      <Text
                        color={plan.isFeatured ? "whiteAlpha.800" : "gray.500"}
                        fontWeight="medium"
                      >
                        / {t("monthly").toLowerCase()}
                      </Text>
                    )}
                </HStack>

                <Button
                  w="full"
                  size="lg"
                  bg={plan.isFeatured ? "brand.500" : "brand.50"}
                  color={plan.isFeatured ? "white" : "brand.900"}
                  _hover={{
                    bg: plan.isFeatured ? "brand.100" : "brand.100",
                    color: "brand.900",
                  }}
                  borderRadius="xl"
                  fontWeight="bold"
                >
                  {plan.cta}
                </Button>

                <VStack align="flex-start" gap={4} mt={4} w="full">
                  {plan.features.map((feature, idx) => (
                    <HStack key={idx} align="flex-start" gap={3}>
                      <Box
                        mt={1}
                        color={plan.isFeatured ? "brand.100" : "brand.500"}
                      >
                        <Check size={20} />
                      </Box>
                      <Text fontWeight="medium">{feature}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
