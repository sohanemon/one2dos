"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import {
  Center,
  Stack,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  FormControl,
  Button,
  HStack,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "./datepicker.css";

export default function Page() {
  const [startDate, setStartDate] = useState(new Date());
  const [priority, setPriority] = useState(priorities[1]);
  console.log(startDate);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  // eslint-disable-next-line react/display-name
  const CalendarDate = forwardRef(
    // @ts-ignore
    ({ value, onClick }, ref: ForwardedRef<unknown>) => (
      <Button id='date' onClick={onClick} ref={ref}>
        {value}
      </Button>
    )
  );
  return (
    <Box color={"gray.700"}>
      <Center
        fontSize={24}
        letterSpacing='wide'
        fontWeight='semibold'
        textAlign='center'
        w={"full"}
      >
        Create New Todo
      </Center>
      <Stack spacing={3} maxWidth='md' mx={"auto"}>
        <Flex justify={"space-between"}>
          <FormControl>
            <FormLabel htmlFor='date'>Select Date</FormLabel>
            <ReactDatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date!)}
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
        <FormControl isInvalid={errors.name!}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            variant={"filled"}
            type={"name"}
            id='name'
            placeholder='expample@example.com'
            {...register("name", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.name && (errors.name.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>
        {/* @ts-ignore */}
        <FormControl isInvalid={errors.note!}>
          <FormLabel htmlFor='note'>Note</FormLabel>
          <Input
            variant={"filled"}
            type={"note"}
            id='note'
            placeholder='expample@example.com'
            {...register("note", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.note && (errors.note.message as React.ReactNode)}
          </FormErrorMessage>
        </FormControl>
      </Stack>
    </Box>
  );
}

const priorities = ["very high", "high", "medium", "low"];
