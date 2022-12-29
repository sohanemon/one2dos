// @ts-nocheck
"use client";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useFirebaseAuth } from "../../contexts/auth-provider";

export default function HookForm() {
  const { user }: auth = useFirebaseAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (user?.uid) {
      push("/");
    }

    return () => {};
  }, [push, user?.uid]);

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
          colorScheme='pink'
          bg='pink.400'
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
  const { googleLogin, user }: auth = useFirebaseAuth();
  console.log("first", user);
  return (
    <Center mb={4}>
      <Center
        onClick={googleLogin}
        gap={1}
        border={"1px solid pink"}
        as='button'
        shadow={"sm"}
        _hover={{ shadow: "md", border: "2px solid pink" }}
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
