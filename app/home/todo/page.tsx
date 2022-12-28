"use client";
import { Box, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { readFromFS } from "../../../firebase/firestore";

export default function Page() {
  const [todos, setTodos] = useState<todo[]>();
  useEffect(() => {
    readFromFS().then((value) => setTodos(value));
    return () => {};
  }, []);

  return (
    <Stack>
      <Center
        fontSize={24}
        mb='8'
        letterSpacing='wide'
        fontWeight='semibold'
        textAlign='center'
        w={"full"}
      >
        My Todos
      </Center>
      {todos?.map((_) => (
        <Box key={_.id}>{_.title}</Box>
      ))}
    </Stack>
  );
}
