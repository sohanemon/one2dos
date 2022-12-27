// @ts-nocheck
"use client";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  Box,
  Text,
  Center,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function HookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box w={["96"]} mt='20'>
      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <VStack h={"full"}>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              type={"email"}
              id='email'
              placeholder='expample@example.com'
              {...register("email", {
                required: "This is required",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type={"password"}
              placeholder='******'
              {...register("password", {
                required: "This is required",
                minLength: { value: 8, message: "Minimum length should be 8" },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </VStack>
        <Button
          mt={4}
          colorScheme='teal'
          isLoading={isSubmitting}
          type='submit'
        >
          Submit
        </Button>
      </Box>
      <Divider my={10} />
      <GoogleLogin />
    </Box>
  );
}
function GoogleLogin() {
  return (
    <Center mb={4}>
      <Center
        gap={1}
        as='button'
        shadow={"sm"}
        _hover={{ shadow: "md" }}
        px='7'
        py={1}
        rounded='full'
      >
        <FcGoogle fontSize={20} />
        <Text display={"inline"} fontWeight={"semibold"}>
          Login with Google
        </Text>
      </Center>
    </Center>
  );
}
