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
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { completedTodos } from "../../../firebase/firestore";

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
        Completed Tasks
      </Center>{" "}
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th>Day</Th>
              <Th>Name</Th>
              <Th>Note</Th>
              <Th></Th>
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
    </Stack>
  );
}
