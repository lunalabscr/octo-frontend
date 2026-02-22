"use client";

import { Box, Flex, Text, VStack, Separator } from "@chakra-ui/react";
import { Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react";
import { format } from "date-fns";

export default function BookingSummary({
  bookingData,
}: {
  bookingData: {
    serviceId: string | null;
    professionalId: string | null;
    date: string | null;
    time: string | null;
    name: string;
    email: string;
    phone: string;
  };
}) {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      overflow="hidden"
    >
      <Box
        p={6}
        bgGradient="to-r"
        gradientFrom="brand.500"
        gradientTo="brand.900"
        color="white"
      >
        <Text
          fontSize="xs"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="widest"
          opacity={0.8}
          mb={1}
        >
          Booking Summary
        </Text>
        <Text fontSize="2xl" fontWeight="900" lineHeight="tight">
          OctoBook Studio
        </Text>
      </Box>

      <VStack align="stretch" gap={5} p={6}>
        <Box>
          <Text fontSize="sm" color="gray.500" fontWeight="bold" mb={1}>
            Service
          </Text>
          <Text fontSize="xl" fontWeight="900" color="brand.900">
            {bookingData.serviceId === "s2"
              ? "Beard Trim & Shape"
              : bookingData.serviceId === "s3"
                ? "Full Grooming Package"
                : "Premium Haircut"}
          </Text>
          <Text color="brand.500" fontWeight="medium" fontSize="md">
            {bookingData.serviceId === "s2"
              ? "30 min • $25"
              : bookingData.serviceId === "s3"
                ? "90 min • $80"
                : "45 min • $40"}
          </Text>
        </Box>

        <Separator variant="dashed" borderColor="gray.300" borderWidth="2px" />

        <Flex align="center" gap={4}>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            bg="brand.50"
            borderRadius="full"
            color="brand.500"
          >
            <User size={20} />
          </Flex>
          <Box>
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Professional
            </Text>
            <Text fontWeight="bold" color="brand.900" fontSize="lg">
              {bookingData.professionalId === "any"
                ? "Any Professional"
                : bookingData.professionalId === "p2"
                  ? "Jordan Lee"
                  : bookingData.professionalId === "p3"
                    ? "Sam Taylor"
                    : "Alex Rivera"}
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={4}>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            bg="brand.50"
            borderRadius="full"
            color="brand.500"
          >
            <Calendar size={20} />
          </Flex>
          <Box>
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Date
            </Text>
            <Text fontWeight="bold" color="brand.900" fontSize="lg">
              {bookingData.date
                ? format(new Date(bookingData.date), "PPP")
                : "Unknown Date"}
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={4}>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            bg="brand.50"
            borderRadius="full"
            color="brand.500"
          >
            <Clock size={20} />
          </Flex>
          <Box>
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Time
            </Text>
            <Text fontWeight="bold" color="brand.900" fontSize="lg">
              {bookingData.time || "Unknown Time"}
            </Text>
          </Box>
        </Flex>

        <Flex align="center" gap={4}>
          <Flex
            align="center"
            justify="center"
            w={10}
            h={10}
            bg="brand.50"
            borderRadius="full"
            color="brand.500"
          >
            <MapPin size={20} />
          </Flex>
          <Box>
            <Text
              fontSize="xs"
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Location
            </Text>
            <Text fontWeight="medium" color="brand.900" fontSize="md">
              123 OctoBook Plaza, Suite 400
            </Text>
          </Box>
        </Flex>

        <Separator variant="dashed" borderColor="gray.300" borderWidth="2px" />

        {/* Client Details */}
        <Box>
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="bold"
            mb={3}
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Your Details
          </Text>

          <VStack align="stretch" gap={3}>
            <Flex align="center" gap={3}>
              <User size={16} color="#7AAACE" />
              <Text fontWeight="bold" color="brand.900">
                {bookingData.name || "N/A"}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Mail size={16} color="#7AAACE" />
              <Text fontWeight="medium" color="brand.900" fontSize="sm">
                {bookingData.email || "N/A"}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Phone size={16} color="#7AAACE" />
              <Text fontWeight="medium" color="brand.900" fontSize="sm">
                {bookingData.phone || "N/A"}
              </Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
