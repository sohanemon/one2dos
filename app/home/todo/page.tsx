"use client";
import { Box, Center, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { readFromFS } from "../../../firebase/firestore";

export default function Page() {
  const [todos, setTodos] = useState<todo[]>();
  const { user } = useFirebaseAuth();
  useEffect(() => {
    if (user?.uid) readFromFS(user?.uid!).then((value) => setTodos(value));
    return () => {};
  }, [user?.uid]);

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
