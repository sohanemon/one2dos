import { Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Center>
      <Stack textAlign={"center"}>
        <Text fontSize={"2xl"}>Whoops!</Text>
        <Text as='p' mt='-1'>
          No todos found
        </Text>
        <Text
          as={Link}
          fontSize='sm'
          color={"pink.500"}
          mt='4'
          _hover={{ textDecoration: "underline" }}
          href={"/home/new"}
        >
          Create a todo
        </Text>
      </Stack>
    </Center>
  );
}
