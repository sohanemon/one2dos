"use client";
import { useState, useEffect } from "react";
import { Checkbox, Td, Th, Tr } from "@chakra-ui/react";
import { updateTodo } from "../../../firebase/firestore";

export default function TodoTable({ todo }: { todo: todo }) {
  const [isChecked, setIsChecked] = useState(todo.done);
  useEffect(() => {
    updateTodo(todo.id, isChecked);

    return () => {};
  }, [isChecked, todo.id]);

  return (
    <>
      <Tr
        onClick={() => setIsChecked(!isChecked)}
        cursor={"pointer"}
        _hover={{ bg: "pink.50" }}
      >
        <Td>
          <Checkbox
            size='lg'
            colorScheme='pink'
            bg={"blackAlpha.300"}
            isChecked={isChecked}
          ></Checkbox>
        </Td>
        <Td>{todo.date}</Td>
        <Td>{todo.title}</Td>
        <Td>{todo.note}</Td>
        <Td textTransform={"capitalize"}>{todo.priority}</Td>
      </Tr>
    </>
  );
}
