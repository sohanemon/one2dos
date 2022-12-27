import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useFirebaseAuth } from "../../contexts/auth-provider";

export default function LeftSide() {
  const { user } = useFirebaseAuth();
  const date = new Date();
  return (
    <Box p={2} color='gray.700'>
      <Flex
        alignItems={"center"}
        fontSize={16}
        mb='6'
        fontWeight={"semibold"}
        gap={2}
      >
        <BsFillCalendarCheckFill color='#ed64a6' />
        {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
      </Flex>
      <Flex mb={"5"} alignItems={"center"} ml={"-2"}>
        <Flex gap={2}>
          <Avatar
            rounded={"lg"}
            size={"md"}
            bg='pink.400'
            name={user?.displayName}
          />
          <Box>
            <Text fontWeight={"semibold"}>{user?.displayName}</Text>
            <Text fontSize={14} color='gray.600'>
              {user?.email}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <VStack alignItems={"start"}>
        <Text fontWeight={"semibold"} letterSpacing='wider'>
          New
        </Text>
        <Text fontWeight={"semibold"} letterSpacing='wider'>
          Todo
        </Text>
        <Text fontWeight={"semibold"} letterSpacing='wider'>
          Done
        </Text>
      </VStack>
    </Box>
  );
}
