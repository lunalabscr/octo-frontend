"use client";

import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isBefore,
  startOfToday,
  addMonths,
  subMonths,
  getDay,
} from "date-fns";
import { useState, useMemo } from "react";

const MotionBox = motion.create(Box);

const morningTimes = ["09:00 AM", "10:00 AM", "11:30 AM"];
const afternoonTimes = ["01:00 PM", "02:30 PM", "04:00 PM", "05:00 PM"];

export default function DateTimeSelection({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (id: string) => void;
  onSelectTime: (time: string) => void;
}) {
  const t = useTranslations("Demo");

  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));

  const selectedDateObj = selectedDate ? new Date(selectedDate) : undefined;

  const handleDateSelect = (date: Date) => {
    onSelectDate(date.toISOString());
  };

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const daysInMonth = useMemo(() => {
    return eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });
  }, [currentMonth]);

  const startDay = getDay(startOfMonth(currentMonth));
  const blankDays = Array.from({ length: startDay }, (_, i) => i);
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <VStack align="stretch" gap={8} w="full">
      {/* Date Selection */}
      <Box
        w="full"
        bg="white"
        p={6}
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.100"
        boxShadow="sm"
      >
        {/* Month Header */}
        <Flex justify="space-between" align="center" mb={6}>
          <Box
            as="button"
            p={2}
            borderRadius="md"
            _hover={{ bg: "gray.100" }}
            color={
              isBefore(currentMonth, startOfMonth(today))
                ? "gray.300"
                : "gray.600"
            }
            onClick={() =>
              !isBefore(currentMonth, startOfMonth(today)) && handlePrevMonth()
            }
            cursor={
              isBefore(currentMonth, startOfMonth(today))
                ? "not-allowed"
                : "pointer"
            }
          >
            <ChevronLeft size={20} />
          </Box>
          <Text fontWeight="bold" color="brand.900" fontSize="lg">
            {format(currentMonth, "MMMM yyyy")}
          </Text>
          <Box
            as="button"
            p={2}
            borderRadius="md"
            _hover={{ bg: "gray.100" }}
            color="gray.600"
            onClick={handleNextMonth}
            cursor="pointer"
          >
            <ChevronRight size={20} />
          </Box>
        </Flex>

        {/* Weekday Headers */}
        <SimpleGrid columns={7} mb={2}>
          {weekDays.map((day) => (
            <Text
              key={day}
              textAlign="center"
              fontSize="xs"
              fontWeight="bold"
              color="gray.400"
              textTransform="uppercase"
            >
              {day}
            </Text>
          ))}
        </SimpleGrid>

        {/* Days Grid */}
        <SimpleGrid columns={7} gap={2}>
          {blankDays.map((blank) => (
            <Box key={`blank-${blank}`} />
          ))}

          {daysInMonth.map((date) => {
            const isPast = isBefore(date, today);
            const isSelected =
              selectedDateObj && isSameDay(date, selectedDateObj);

            return (
              <Flex
                key={date.toISOString()}
                as="button"
                align="center"
                justify="center"
                h={10}
                borderRadius="lg"
                fontWeight={isSelected ? "bold" : "medium"}
                bg={isSelected ? "brand.500" : "transparent"}
                color={isSelected ? "white" : isPast ? "gray.300" : "gray.700"}
                _hover={
                  !isPast && !isSelected
                    ? { bg: "brand.50", color: "brand.900" }
                    : undefined
                }
                cursor={isPast ? "not-allowed" : "pointer"}
                onClick={() => !isPast && handleDateSelect(date)}
                transition="all 0.2s"
              >
                {format(date, "d")}
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>

      {/* Time Selection */}
      {selectedDate && (
        <MotionBox
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <VStack align="stretch" gap={6}>
            <Box>
              <Text fontWeight="900" color="brand.900" mb={4} fontSize="lg">
                {t("morning")}
              </Text>
              <Flex flexWrap="wrap" gap={4}>
                {morningTimes.map((time) => (
                  <Box
                    key={time}
                    px={5}
                    py={3}
                    bg={selectedTime === time ? "brand.900" : "white"}
                    color={selectedTime === time ? "white" : "brand.900"}
                    border="2px solid"
                    borderColor={
                      selectedTime === time ? "brand.900" : "gray.100"
                    }
                    borderRadius="xl"
                    cursor="pointer"
                    fontWeight="bold"
                    _hover={{
                      borderColor: "brand.300",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    onClick={() => onSelectTime(time)}
                  >
                    {time}
                  </Box>
                ))}
              </Flex>
            </Box>

            <Box>
              <Text fontWeight="900" color="brand.900" mb={4} fontSize="lg">
                {t("afternoon")}
              </Text>
              <Flex flexWrap="wrap" gap={4}>
                {afternoonTimes.map((time) => (
                  <Box
                    key={time}
                    px={5}
                    py={3}
                    bg={selectedTime === time ? "brand.900" : "white"}
                    color={selectedTime === time ? "white" : "brand.900"}
                    border="2px solid"
                    borderColor={
                      selectedTime === time ? "brand.900" : "gray.100"
                    }
                    borderRadius="xl"
                    cursor="pointer"
                    fontWeight="bold"
                    _hover={{
                      borderColor: "brand.300",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.2s"
                    onClick={() => onSelectTime(time)}
                  >
                    {time}
                  </Box>
                ))}
              </Flex>
            </Box>
          </VStack>
        </MotionBox>
      )}
    </VStack>
  );
}
