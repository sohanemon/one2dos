"use client";
import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../components/loader";
import { useFirebaseAuth } from "../contexts/auth-provider";

export default function Home() {
  const { user } = useFirebaseAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (user?.uid) push("/home");
    else push("/auth/login");
    return () => {};
  }, [push, user?.uid]);

  return (
    <main>
      <Center mt='30'>
        <Loader />
      </Center>
    </main>
  );
}
