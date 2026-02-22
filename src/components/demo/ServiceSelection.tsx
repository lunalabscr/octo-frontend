"use client";

import { Box, SimpleGrid, Text, VStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Scissors, Zap, Sparkles } from "lucide-react";

const MotionBox = motion.create(Box);

const services = [
  {
    id: "s1",
    name: "Premium Haircut",
    duration: "45 min",
    price: "$40",
    icon: <Scissors size={24} />,
  },
  {
    id: "s2",
    name: "Beard Trim & Shape",
    duration: "30 min",
    price: "$25",
    icon: <Zap size={24} />,
  },
  {
    id: "s3",
    name: "Full Grooming Package",
    duration: "90 min",
    price: "$80",
    icon: <Sparkles size={24} />,
  },
];

export default function ServiceSelection({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6} w="full">
      {services.map((service, i) => (
        <MotionBox
          key={service.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          onClick={() => onSelect(service.id)}
          cursor="pointer"
        >
          <VStack
            align="flex-start"
            p={6}
            bg={selectedId === service.id ? "brand.50" : "white"}
            border="2px solid"
            borderColor={selectedId === service.id ? "brand.500" : "gray.100"}
            borderRadius="2xl"
            _hover={{
              borderColor: "brand.300",
              transform: "translateY(-4px)",
              boxShadow: "sm",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            h="full"
            justify="space-between"
          >
            <Box w="full">
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                bg={selectedId === service.id ? "brand.500" : "brand.100"}
                color={selectedId === service.id ? "white" : "brand.900"}
                borderRadius="xl"
                mb={4}
              >
                {service.icon}
              </Flex>
              <Text
                fontSize="xl"
                fontWeight="900"
                color="brand.900"
                mb={2}
                lineHeight="tight"
              >
                {service.name}
              </Text>
            </Box>

            <Flex
              justify="space-between"
              w="full"
              mt={4}
              pt={4}
              borderTop="1px solid"
              borderColor="gray.100"
              color="gray.500"
              fontSize="md"
            >
              <Text display="flex" alignItems="center" gap={1}>
                {service.duration}
              </Text>
              <Text fontWeight="900" color="brand.900" fontSize="lg">
                {service.price}
              </Text>
            </Flex>
          </VStack>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}
