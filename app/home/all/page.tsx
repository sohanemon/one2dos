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
import NotFound from "../../../components/not-found";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { allTodos } from "../../../firebase/firestore";
import TodoTable from "../todo/table";

export default function Page() {
  const [todos, setTodos] = useState<todo[]>();
  const [refetch, setRefetch] = useState(0);
  const { user } = useFirebaseAuth();
  useEffect(() => {
    if (user?.uid) allTodos(user?.uid).then((value) => setTodos(value));
    return () => {};
  }, [user?.uid, refetch]);

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
        All Tasks
      </Center>{" "}
      {todos?.length ? (
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Status</Th>
                <Th>Day</Th>
                <Th>Name</Th>
                <Th>Note</Th>
                <Th>Priority</Th>
              </Tr>
            </Thead>
            <Tbody key={todos.length}>
              {todos?.map((_) => (
                <TodoTable setRefetch={setRefetch} key={_.id} todo={_} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <NotFound />
      )}
    </Stack>
  );
}
