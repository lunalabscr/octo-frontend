"use client";

import { Box, Flex, Text, VStack, Badge, SimpleGrid } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Scissors, Stethoscope, Dumbbell, Camera } from "lucide-react";

const MotionBox = motion.create(Box);

export default function UseCases() {
  const t = useTranslations("UseCases");

  const cases = [
    {
      id: "salons",
      icon: <Scissors size={40} color="#7AAACE" />, // Medium Blue
      title: t("salons.title"),
      desc: t("salons.desc"),
    },
    {
      id: "clinics",
      icon: <Stethoscope size={40} color="#9CD5FF" />, // Light Blue
      title: t("clinics.title"),
      desc: t("clinics.desc"),
    },
    {
      id: "gyms",
      icon: <Dumbbell size={40} color="#355872" />, // Dark Blue
      title: t("gyms.title"),
      desc: t("gyms.desc"),
    },
    {
      id: "studios",
      icon: <Camera size={40} color="#7AAACE" />, // Medium Blue
      title: t("studios.title"),
      desc: t("studios.desc"),
    },
  ];

  return (
    <Box
      id="use-cases"
      py={{ base: 20, md: 32 }}
      bg="brand.50"
      position="relative"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction="column"
        align="center"
        gap={16}
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
              bg="brand.500"
              color="white"
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

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
          {cases.map((useCase, i) => (
            <MotionBox
              key={useCase.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              w="full"
            >
              <Flex
                bg="white"
                p={8}
                borderRadius="3xl"
                boxShadow="sm"
                align="flex-start"
                gap={6}
                border="1px solid"
                borderColor="transparent"
                _hover={{ borderColor: "brand.100", transform: "scale(1.02)" }}
                transition="all 0.3s ease"
              >
                <Box p={4} bg="brand.50" borderRadius="2xl">
                  {useCase.icon}
                </Box>
                <VStack align="flex-start" gap={2}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.900">
                    {useCase.title}
                  </Text>
                  <Text color="gray.600" lineHeight="tall">
                    {useCase.desc}
                  </Text>
                </VStack>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
