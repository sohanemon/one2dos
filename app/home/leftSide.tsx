import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useFirebaseAuth } from "../../contexts/auth-provider";

export default function LeftSide() {
  const pathname = usePathname();
  const { user } = useFirebaseAuth();
  const date = new Date();
  return (
    <Box p={2} color='gray.700'>
      <Flex justifyContent='space-between'>
        <Flex
          alignItems={"center"}
          fontSize={16}
          mb='6'
          fontWeight={"semibold"}
          gap={2}
        >
          <BsFillCalendarCheckFill color='#ed64a6' />
          {date.getMonth() + 1}-{date.getDate()}-{date.getFullYear()}
          {/* as getMonth starts from 0 as January */}
        </Flex>

        <Box title='Log Out Session' cursor={"pointer"}>
          <RiLogoutCircleRLine fontSize={20} color='#ee4697' />
        </Box>
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
        {links.map((_) => (
          <Link key={_} href={`/home/${_}`}>
            <Text
              fontWeight={""}
              textTransform='capitalize'
              color={pathname?.includes(_) ? "pink.500" : ""}
              _hover={{ color: "pink.500" }}
              letterSpacing='wider'
            >
              {_}
            </Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
}

const links = ["new", "todo", "done", "all"];
