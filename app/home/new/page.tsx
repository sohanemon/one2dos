"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { addToFS } from "../../../firebase/firestore";
import "./datepicker.css";

export default function Page() {
  const [date, setDate] = useState(new Date());
  const { user } = useFirebaseAuth();
  const [priority, setPriority] = useState(priorities[1]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = (data: unknown) => {
    const todoDoc = {
      done: false,
      ...(data as object),
      priority,
      date: `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`,
      uid: user?.uid,
    };
    addToFS(todoDoc);
  };

  return (
    <Box color={"gray.700"}>
      <Center
        fontSize={24}
        mb='8'
        letterSpacing='wide'
        fontWeight='semibold'
        textAlign='center'
        w={"full"}
      >
        Create New Todo
      </Center>
      <Stack
        as={"form"}
        onSubmit={handleSubmit(submitHandler)}
        spacing={3}
        maxWidth='md'
        mx={"auto"}
      >
        <Flex justify={"space-between"}>
          <FormControl>
            <FormLabel htmlFor='date'>Select Date</FormLabel>
            <ReactDatePicker
              selected={date}
              onChange={(date: Date | null) => setDate(date!)}
              customInput={<CalendarDate />}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='date'>Priority</FormLabel>
            <Menu>
              <MenuButton as={Button} rightIcon={<MdOutlineArrowDropDown />}>
                {priority}
              </MenuButton>
              <MenuList>
                {priorities.map((_) => (
                  <MenuItem
                    key={_}
                    onClick={(e) =>
                      setPriority((e.target as HTMLElement).innerText)
                    }
                  >
                    {_}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </FormControl>
        </Flex>
        {/* @ts-ignore */}
        <FormControl isInvalid={errors.title!}>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input
            variant={"filled"}
            type={"title"}
            id='title'
            placeholder='Hangouts'
            {...register("title", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.title && (errors.title.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>
        {/* @ts-ignore */}
        <FormControl isInvalid={errors.note!}>
          <FormLabel htmlFor='note'>Note</FormLabel>
          <Input
            variant={"filled"}
            type={"note"}
            id='note'
            placeholder='With ...'
            {...register("note", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.note && (errors.note.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isSubmitting}
          mt={8}
          w='max'
          colorScheme='pink'
          type='submit'
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
}

const priorities = ["very high", "high", "medium", "low"];

// eslint-disable-next-line react/display-name
const CalendarDate = forwardRef(
  // @ts-ignore
  ({ value, onClick }, ref: ForwardedRef<unknown>) => (
    <Button id='date' onClick={onClick} ref={ref}>
      {value}
    </Button>
  )
);
