"use client";

import { Box, Flex, Text, VStack, Badge } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

const MotionBox = motion.create(Box);

export default function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = [
    { value: "q1", title: t("q1.question"), text: t("q1.answer") },
    { value: "q2", title: t("q2.question"), text: t("q2.answer") },
    { value: "q3", title: t("q3.question"), text: t("q3.answer") },
    { value: "q4", title: t("q4.question"), text: t("q4.answer") },
  ];

  return (
    <Box id="faq" py={{ base: 20, md: 32 }} bg="brand.50" position="relative">
      <Flex
        maxW="3xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        direction="column"
        align="center"
        gap={12}
      >
        <VStack align="center" gap={4} textAlign="center">
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

        <MotionBox
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AccordionRoot collapsible w="full">
            <VStack gap={4} w="full" align="stretch">
              {faqs.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="sm"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    borderColor: "brand.300",
                    boxShadow: "md",
                    transform: "translateY(-4px)",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <AccordionItemTrigger
                    px={{ base: 6, md: 8 }}
                    py={6}
                    _hover={{ color: "brand.500" }}
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl" }}
                    color="brand.900"
                  >
                    {item.title}
                  </AccordionItemTrigger>
                  <AccordionItemContent
                    px={{ base: 6, md: 8 }}
                    pb={6}
                    color="gray.600"
                    fontSize="md"
                    lineHeight="tall"
                  >
                    {item.text}
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </VStack>
          </AccordionRoot>
        </MotionBox>
      </Flex>
    </Box>
  );
}
