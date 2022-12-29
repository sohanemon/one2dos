"use client";
import {
  Button,
  Center,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NotFound from "../../../components/not-found";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { completedTodos, deleteTodo } from "../../../firebase/firestore";

export default function Page() {
  const [todos, setTodos] = useState<todo[]>();
  const [refetch, setRefetch] = useState(0);
  const { user } = useFirebaseAuth();
  useEffect(() => {
    if (user?.uid) completedTodos(user?.uid).then((value) => setTodos(value));
    return () => {};
  }, [user?.uid, refetch]);
  // refetch is to update the component
  const handleDelete = (id: string) => {
    deleteTodo(id);
    setRefetch((p) => p + 1);
  };

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
        Completed Tasks
      </Center>{" "}
      {todos?.length ? (
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th>Day</Th>
                <Th>Name</Th>
                <Th>Note</Th>
                <Th>{""}</Th>
              </Tr>
            </Thead>
            <Tbody>
              {todos?.map((_) => (
                <Tr key={_.id}>
                  {" "}
                  <Td>{_.date}</Td>
                  <Td>{_.title}</Td>
                  <Td>{_.note}</Td>
                  <Td>
                    <Button
                      onClick={() => handleDelete(_.id)}
                      size={"xs"}
                      colorScheme='red'
                      rounded={"full"}
                      bg='red.300'
                    >
                      X
                    </Button>
                  </Td>
                </Tr>
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
