import { Center, Stack, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Center>
      <Stack textAlign={"center"}>
        <Text fontSize={"2xl"}>Whoops!</Text>
        <Text>No todos found</Text>
      </Stack>
    </Center>
  );
}
