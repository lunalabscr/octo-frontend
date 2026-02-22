"use client";

import { Box, Container, Flex, Text, VStack, Badge } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { Check, Star, MapPin, ArrowLeft } from "lucide-react";

import ServiceSelection from "./ServiceSelection";
import ProfessionalSelection from "./ProfessionalSelection";
import DateTimeSelection from "./DateTimeSelection";
import UserDetailsSelection from "./UserDetailsSelection";
import BookingSummary from "./BookingSummary";

export default function DemoFlow() {
  const t = useTranslations("Demo");
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceId: null as string | null,
    professionalId: null as string | null,
    date: null as string | null,
    time: null as string | null,
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = () => {
    // Basic validation before moving forward
    if (step === 1 && !bookingData.serviceId) return;
    if (step === 2 && !bookingData.professionalId) return;
    if (step === 3 && (!bookingData.date || !bookingData.time)) return;
    if (step === 4 && (!bookingData.name || !bookingData.email)) return;

    setStep((s) => Math.min(s + 1, 6));
  };
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const canProceed = () => {
    if (step === 1) return !!bookingData.serviceId;
    if (step === 2) return !!bookingData.professionalId;
    if (step === 3) return !!bookingData.date && !!bookingData.time;
    if (step === 4) return !!bookingData.name && !!bookingData.email;
    return true;
  };

  return (
    <Box minH="100vh" bg="gray.50" position="relative" pb={20}>
      {/* Floating Back Button */}
      <Box position="fixed" top={4} left={4} zIndex={100}>
        <Link href="/">
          <Flex
            align="center"
            gap={2}
            bg="white"
            px={4}
            py={2}
            borderRadius="full"
            boxShadow="md"
            color="brand.900"
            fontWeight="bold"
            fontSize="sm"
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s"
          >
            <ArrowLeft size={16} />
            Back to OctoBook
          </Flex>
        </Link>
      </Box>

      {/* Mock Client Profile Header */}
      <Box w="full" bg="white" borderBottom="1px solid" borderColor="gray.100">
        {/* Cover Image */}
        <Box
          w="full"
          h={{ base: "150px", md: "250px" }}
          bgImage="url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop')"
          bgSize="cover"
          backgroundPosition="center"
          position="relative"
        >
          <Box position="absolute" inset={0} bg="blackAlpha.300" />
        </Box>

        <Container maxW="4xl" mx="auto" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            align={{ base: "center", sm: "flex-end" }}
            mt={{ base: "-40px", md: "-60px" }}
            pb={8}
            gap={6}
            position="relative"
            zIndex={10}
            textAlign={{ base: "center", sm: "left" }}
          >
            {/* Avatar / Logo */}
            <Flex
              w={{ base: "100px", md: "140px" }}
              h={{ base: "100px", md: "140px" }}
              bg="white"
              borderRadius="full"
              p={2}
              boxShadow="lg"
              justify="center"
              align="center"
            >
              <Box
                w="full"
                h="full"
                borderRadius="full"
                bgImage="url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=500&auto=format&fit=crop')"
                bgSize="cover"
                backgroundPosition="center"
              />
            </Flex>

            {/* Business Details */}
            <VStack
              align={{ base: "center", sm: "flex-start" }}
              gap={1}
              flex={1}
            >
              <Flex
                gap={2}
                align="center"
                flexWrap="wrap"
                justify={{ base: "center", sm: "flex-start" }}
              >
                <Text
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="900"
                  color="gray.900"
                  letterSpacing="tight"
                >
                  The Gentleman&apos;s Lounge
                </Text>
                <Badge
                  colorScheme="green"
                  variant="solid"
                  borderRadius="full"
                  px={2}
                >
                  OPEN
                </Badge>
              </Flex>

              <Flex
                gap={4}
                color="gray.500"
                fontSize="sm"
                align="center"
                flexWrap="wrap"
                justify={{ base: "center", sm: "flex-start" }}
              >
                <Flex align="center" gap={1}>
                  <Star size={16} fill="currentColor" color="#fbbf24" />
                  <Text fontWeight="bold" color="gray.700">
                    4.9
                  </Text>
                  <Text>(342 reviews)</Text>
                </Flex>
                <Text>•</Text>
                <Flex align="center" gap={1}>
                  <MapPin size={16} />
                  <Text>123 Premier Ave, New York</Text>
                </Flex>
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Booking Flow Container */}
      <Box flex="1" py={{ base: 12, md: 16 }}>
        <Container maxW="4xl" mx="auto">
          <VStack align="stretch" gap={8}>
            {/* Step Indicator Desktop */}
            <Box
              bg="white"
              p={6}
              borderRadius="2xl"
              boxShadow="sm"
              display={{ base: "none", md: "block" }}
            >
              <Flex justify="space-between" align="center" position="relative">
                {/* Background Connecting Line */}
                <Box
                  position="absolute"
                  top="18px"
                  left="5%"
                  right="5%"
                  h="3px"
                  bg="gray.100"
                  zIndex={0}
                />
                {/* Active Connecting Line */}
                <Box
                  position="absolute"
                  top="18px"
                  left="5%"
                  w={`${(Math.min(step - 1, 4) / 4) * 90}%`}
                  h="3px"
                  bg="brand.500"
                  zIndex={0}
                  transition="width 0.4s ease"
                />

                {[1, 2, 3, 4, 5].map((s) => (
                  <VStack key={s} zIndex={1} gap={2}>
                    <Flex
                      w={10}
                      h={10}
                      borderRadius="full"
                      align="center"
                      justify="center"
                      bg={step >= s ? "brand.500" : "white"}
                      color={step >= s ? "white" : "gray.400"}
                      border="3px solid"
                      borderColor={step >= s ? "brand.500" : "gray.200"}
                      fontWeight="bold"
                      transition="all 0.3s ease"
                      boxShadow={
                        step === s
                          ? "0 0 0 4px var(--chakra-colors-brand-50)"
                          : "none"
                      }
                    >
                      {step > s ? <Check size={18} strokeWidth={3} /> : s}
                    </Flex>
                    <Text
                      fontSize="sm"
                      fontWeight={step === s ? "bold" : "medium"}
                      color={
                        step === s
                          ? "brand.900"
                          : step > s
                            ? "brand.500"
                            : "gray.400"
                      }
                      mt={1}
                    >
                      {t(
                        `step${s}` as
                          | "step1"
                          | "step2"
                          | "step3"
                          | "step4"
                          | "step5",
                      )}
                    </Text>
                  </VStack>
                ))}
              </Flex>
            </Box>

            {/* Step Indicator Mobile */}
            <Flex
              justify="center"
              align="center"
              bg="white"
              p={3}
              borderRadius="lg"
              boxShadow="sm"
              display={{ base: "flex", md: "none" }}
            >
              <Text fontWeight="bold" color="brand.500">
                Step {step} of 5:{" "}
                {step === 1
                  ? t("step1")
                  : step === 2
                    ? t("step2")
                    : step === 3
                      ? t("step3")
                      : step === 4
                        ? t("step4")
                        : t("step5")}
              </Text>
            </Flex>

            {/* Form Area */}
            <Box
              bg="white"
              p={{ base: 6, md: 10 }}
              borderRadius="3xl"
              boxShadow="sm"
              minH="400px"
              border="1px solid"
              borderColor="gray.100"
            >
              {step === 1 && (
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.900"
                    mb={6}
                  >
                    {t("selectService")}
                  </Text>
                  <ServiceSelection
                    selectedId={bookingData.serviceId}
                    onSelect={(id) =>
                      setBookingData({ ...bookingData, serviceId: id })
                    }
                  />
                </Box>
              )}
              {step === 2 && (
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.900"
                    mb={6}
                  >
                    {t("selectProfessional")}
                  </Text>
                  <ProfessionalSelection
                    selectedId={bookingData.professionalId}
                    onSelect={(id) =>
                      setBookingData({ ...bookingData, professionalId: id })
                    }
                  />
                </Box>
              )}
              {step === 3 && (
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.900"
                    mb={6}
                  >
                    {t("selectDateTime")}
                  </Text>
                  <DateTimeSelection
                    selectedDate={bookingData.date}
                    selectedTime={bookingData.time}
                    onSelectDate={(id) =>
                      setBookingData({ ...bookingData, date: id, time: null })
                    }
                    onSelectTime={(time) =>
                      setBookingData({ ...bookingData, time })
                    }
                  />
                </Box>
              )}
              {step === 4 && (
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.900"
                    mb={6}
                  >
                    {t("yourDetails")}
                  </Text>
                  <UserDetailsSelection
                    details={{
                      name: bookingData.name,
                      email: bookingData.email,
                      phone: bookingData.phone,
                    }}
                    onChange={(details) =>
                      setBookingData({ ...bookingData, ...details })
                    }
                  />
                </Box>
              )}
              {step === 5 && (
                <Box>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.900"
                    mb={6}
                  >
                    {t("review")}
                  </Text>
                  <BookingSummary bookingData={bookingData} />
                </Box>
              )}
              {step === 6 && (
                <VStack align="center" justify="center" h="full" gap={4}>
                  <Text fontSize="3xl" fontWeight="bold" color="green.500">
                    {t("successTitle")}
                  </Text>
                  <Text color="gray.600">{t("successDesc")}</Text>
                </VStack>
              )}
            </Box>

            {/* Navigation Buttons */}
            {step < 6 && (
              <Flex justify="space-between" mt={4}>
                <Box>
                  {step > 1 && (
                    <Box
                      as="button"
                      px={6}
                      py={3}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.200"
                      color="gray.600"
                      _hover={{ bg: "gray.50" }}
                      onClick={prevStep}
                    >
                      {t("back")}
                    </Box>
                  )}
                </Box>
                <Box
                  as="button"
                  px={8}
                  py={3}
                  borderRadius="xl"
                  bg={canProceed() ? "brand.500" : "gray.300"}
                  color="white"
                  fontWeight="bold"
                  _hover={{ bg: canProceed() ? "brand.900" : "gray.300" }}
                  onClick={canProceed() ? nextStep : undefined}
                  cursor={canProceed() ? "pointer" : "not-allowed"}
                >
                  {step === 5 ? t("confirm") : t("next")}
                </Box>
              </Flex>
            )}
          </VStack>
        </Container>
      </Box>

      {/* Powered By Footer */}
      <Box py={8} textAlign="center">
        <Text fontSize="sm" color="gray.400" fontWeight="medium">
          Powered by{" "}
          <Text as="span" color="brand.900" fontWeight="900">
            OctoBook
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
