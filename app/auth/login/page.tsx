"use client";
import { Center } from "@chakra-ui/react";
import HookForm from "../../../components/form/login-form";
import { useFirebaseAuth } from "../../../contexts/auth-provider";
import { auth } from "../../../type";

export default function Page() {
  return (
    <Center>
      <HookForm />
    </Center>
  );
}
