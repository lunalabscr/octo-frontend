"use client";

import { Box, SimpleGrid, Text, VStack, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

const professionals = [
  {
    id: "p1",
    name: "Alex Rivera",
    role: "Senior Barber",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "p2",
    name: "Jordan Lee",
    role: "Stylist",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "p3",
    name: "Sam Taylor",
    role: "Color Specialist",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  { id: "any", name: "Any Professional", role: "First Available", avatar: "" },
];

export default function ProfessionalSelection({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const t = useTranslations("Demo");

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={6} w="full">
      {professionals.map((pro, i) => (
        <MotionBox
          key={pro.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          onClick={() => onSelect(pro.id)}
          cursor="pointer"
        >
          <VStack
            p={8}
            bg={selectedId === pro.id ? "brand.50" : "white"}
            border="2px solid"
            borderColor={selectedId === pro.id ? "brand.500" : "gray.100"}
            borderRadius="2xl"
            _hover={{
              borderColor: "brand.300",
              transform: "translateY(-4px)",
              boxShadow: "sm",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            align="center"
            textAlign="center"
            position="relative"
            overflow="hidden"
            h="full"
            justify="space-between"
          >
            <Box
              w="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                p={1}
                borderRadius="full"
                bgGradient={selectedId === pro.id ? "to-br" : "none"}
                gradientFrom="brand.500"
                gradientTo="brand.900"
                transition="all 0.3s"
              >
                {pro.id === "any" ? (
                  <Box
                    w={24}
                    h={24}
                    bg="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="4px solid white"
                  >
                    <Text fontSize="3xl" color="gray.300" fontWeight="bold">
                      ?
                    </Text>
                  </Box>
                ) : (
                  <Avatar.Root
                    size="2xl"
                    border="4px solid white"
                    css={{ width: "96px", height: "96px" }}
                  >
                    <Avatar.Fallback name={pro.name} />
                    <Avatar.Image src={pro.avatar} />
                  </Avatar.Root>
                )}
              </Box>
            </Box>

            <VStack gap={1} mt={4}>
              <Text fontSize="lg" fontWeight="900" color="brand.900">
                {pro.id === "any" ? t("anyProfessional") : pro.name}
              </Text>
              <Text fontSize="sm" color="brand.500" fontWeight="medium">
                {pro.role}
              </Text>
            </VStack>
          </VStack>
        </MotionBox>
      ))}
    </SimpleGrid>
  );
}
