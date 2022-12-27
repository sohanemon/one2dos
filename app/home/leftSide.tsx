import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useFirebaseAuth } from "../../contexts/auth-provider";

export default function LeftSide() {
  const { user } = useFirebaseAuth();
  return (
    <Box>
      <Flex>
        <Image
          src={user?.photoURL!}
          alt=''
          width={30}
          height={30}
          className=''
        />
      </Flex>
    </Box>
  );
}
