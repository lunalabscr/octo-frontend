"use client";

import { Box, Flex, Text, Button, VStack, Badge } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "@/i18n/routing";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="brand.50"
      pt={{ base: 32, md: 40 }}
      pb={{ base: 20, md: 32 }}
    >
      {/* Abstract Background Elements */}
      <MotionBox
        position="absolute"
        top="-10%"
        left="-5%"
        w="400px"
        h="400px"
        bg="brand.100"
        filter="blur(100px)"
        opacity={0.6}
        borderRadius="full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionBox
        position="absolute"
        bottom="-10%"
        right="-5%"
        w="500px"
        h="500px"
        bg="brand.500"
        filter="blur(120px)"
        opacity={0.4}
        borderRadius="full"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", lg: "row" }}
        align="center"
        gap={12}
        position="relative"
        zIndex={10}
      >
        {/* Text Content */}
        <VStack align="flex-start" gap={6} flex={1} maxW="2xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              colorScheme="blue"
              bg="brand.100"
              color="brand.900"
              px={3}
              py={1}
              borderRadius="full"
              fontWeight="bold"
              letterSpacing="wide"
            >
              {t("badge")}
            </Badge>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              lineHeight="1.1"
              color="brand.900"
              letterSpacing="tighter"
            >
              {t("title")}
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.600"
              lineHeight="tall"
            >
              {t("subtitle")}
            </Text>
          </MotionBox>

          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            gap={4}
            direction={{ base: "column", sm: "row" }}
            w="full"
            pt={4}
          >
            <Link href="/demo">
              <Button
                size="lg"
                bg="brand.900"
                color="white"
                px={8}
                py={7}
                fontSize="lg"
                borderRadius="full"
                _hover={{
                  bg: "brand.500",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
              >
                {t("primaryCta")}
                <ArrowRight size={20} style={{ marginLeft: "8px" }} />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              borderColor="brand.500"
              color="brand.900"
              px={8}
              py={7}
              fontSize="lg"
              borderRadius="full"
              _hover={{ bg: "brand.100", borderColor: "brand.900" }}
              transition="all 0.2s"
            >
              <Play
                size={20}
                style={{ marginRight: "8px" }}
                fill="currentColor"
              />
              {t("secondaryCta")}
            </Button>
          </MotionFlex>
        </VStack>

        {/* Hero Image Placeholder */}
        <MotionBox
          flex={1}
          w="full"
          maxW="600px"
          h={{ base: "300px", md: "500px" }}
          bg="white"
          borderRadius="3xl"
          boxShadow="md"
          position="relative"
          overflow="hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          border="1px solid"
          borderColor="brand.100"
        >
          {/* Mock Dashboard UI Pattern */}
          <Flex direction="column" h="full" p={4} gap={4} bg="gray.50">
            <Flex
              justify="space-between"
              align="center"
              bg="white"
              p={4}
              borderRadius="xl"
              boxShadow="sm"
            >
              <Box w="120px" h="12px" bg="brand.100" borderRadius="full" />
              <Box
                w="32px"
                h="32px"
                bg="brand.500"
                borderRadius="full"
                opacity={0.5}
              />
            </Flex>
            <Flex gap={4} flex={1}>
              <Box
                w={{ base: "0", md: "80px" }}
                bg="white"
                borderRadius="xl"
                boxShadow="sm"
                display={{ base: "none", md: "block" }}
              />
              <Flex direction="column" gap={4} flex={1}>
                <Flex gap={4}>
                  <Box
                    flex={1}
                    h="100px"
                    bg="white"
                    borderRadius="xl"
                    boxShadow="sm"
                  />
                  <Box
                    flex={1}
                    h="100px"
                    bg="brand.900"
                    borderRadius="xl"
                    boxShadow="sm"
                  />
                </Flex>
                <Box flex={1} bg="white" borderRadius="xl" boxShadow="sm" p={4}>
                  {/* Chart Placeholder */}
                  <Flex h="full" align="flex-end" gap={2} opacity={0.6}>
                    {[40, 70, 45, 90, 65, 85, 50].map((h, i) => (
                      <Box
                        key={i}
                        flex={1}
                        h={`${h}%`}
                        bg={i % 2 === 0 ? "brand.500" : "brand.100"}
                        borderRadius="t-md"
                      />
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Flex>

          {/* Overlay Text for Placeholder */}
          <Flex
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.400"
            align="center"
            justify="center"
            backdropFilter="blur(2px)"
            opacity={0}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s"
          >
            <Text
              color="white"
              fontWeight="bold"
              fontSize="xl"
              bg="blackAlpha.700"
              px={4}
              py={2}
              borderRadius="md"
            >
              Hero Image Placeholder
            </Text>
          </Flex>
        </MotionBox>
      </Flex>
    </Box>
  );
}
