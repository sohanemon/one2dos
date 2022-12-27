import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useFirebaseAuth } from "../../contexts/auth-provider";

export default function LeftSide() {
  const { user } = useFirebaseAuth();
  return (
    <Box>
      <Flex alignItems={"center"}>
        <Flex gap={2}>
          <Avatar name={user?.displayName} src={user?.photoURL!} />
          <Box>
            <Text>{user?.displayName}</Text>
            <Text>{user?.email}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
