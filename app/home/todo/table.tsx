"use client";
import { useState, useEffect } from "react";
import { Checkbox, Td, Th, Tr } from "@chakra-ui/react";
import { updateTodo } from "../../../firebase/firestore";

export default function TodoTable({ todo }: { todo: todo }) {
  const [isChecked, setIsChecked] = useState(true);
  useEffect(() => {
    updateTodo(todo.id, isChecked);

    return () => {};
  }, [isChecked, todo.id]);

  return (
    <>
      <Tr cursor={"pointer"} _hover={{ bg: "pink.50" }}>
        <Td>
          <Checkbox
            size='lg'
            colorScheme='pink'
            bg={"blackAlpha.300"}
            isChecked={isChecked && todo.done}
            onChange={() => setIsChecked(!isChecked)}
          ></Checkbox>
        </Td>
        <Td>{todo.date}</Td>
        <Td>{todo.title}</Td>
        <Td>{todo.note}</Td>
        <Td>{todo.priority}</Td>
      </Tr>
    </>
  );
}
