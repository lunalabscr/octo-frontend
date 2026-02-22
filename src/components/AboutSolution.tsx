"use client";

import { Box, Flex, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ChartLine,
  CalendarCheck,
  Users,
  Tags,
  Calendar,
  BellRing,
} from "lucide-react";

const MotionBox = motion.create(Box);

export default function AboutSolution() {
  const t = useTranslations("About");

  const features = [
    {
      id: "analytics",
      icon: <ChartLine size={32} color="#9CD5FF" />,
      title: t("analytics.title"),
      desc: t("analytics.desc"),
    },
    {
      id: "reservation",
      icon: <CalendarCheck size={32} color="#7AAACE" />,
      title: t("reservation.title"),
      desc: t("reservation.desc"),
    },
    {
      id: "staff",
      icon: <Users size={32} color="#355872" />,
      title: t("staff.title"),
      desc: t("staff.desc"),
    },
    {
      id: "categories",
      icon: <Tags size={32} color="#9CD5FF" />,
      title: t("categories.title"),
      desc: t("categories.desc"),
    },
    {
      id: "calendars",
      icon: <Calendar size={32} color="#7AAACE" />,
      title: t("calendars.title"),
      desc: t("calendars.desc"),
    },
    {
      id: "notifications",
      icon: <BellRing size={32} color="#355872" />,
      title: t("notifications.title"),
      desc: t("notifications.desc"),
    },
  ];

  return (
    <Box
      id="features"
      py={{ base: 20, md: 32 }}
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative background circle */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="500px"
        h="500px"
        bg="brand.50"
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
        {/* Header section */}
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

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
          {features.map((feature, index) => (
            <MotionBox
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                align="flex-start"
                p={8}
                bg="white"
                borderRadius="2xl"
                boxShadow="sm"
                borderTop="4px solid"
                borderColor="brand.500"
                h="full"
                gap={4}
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "md",
                  borderColor: "brand.900",
                }}
                transition="all 0.3s ease"
              >
                <Box p={4} bg="brand.50" borderRadius="xl">
                  {feature.icon}
                </Box>
                <Text fontSize="xl" fontWeight="bold" color="brand.900">
                  {feature.title}
                </Text>
                <Text color="gray.600" lineHeight="tall">
                  {feature.desc}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
