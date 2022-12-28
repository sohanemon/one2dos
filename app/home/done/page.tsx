"use client";
import {
  Center,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { completedTodos, readFromFS } from "../../../firebase/firestore";

export default function Page() {
  const [todos, setTodos] = useState<todo[]>();
  const { user } = useFirebaseAuth();
  useEffect(() => {
    if (user?.uid) completedTodos(user?.uid).then((value) => setTodos(value));
    return () => {};
  }, [user?.uid]);
  console.log(todos);
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
      </Center>{" "}
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>[]</Th>
              <Th>Day</Th>
              <Th>Name</Th>
              <Th>Note</Th>
              <Th>Priority</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
