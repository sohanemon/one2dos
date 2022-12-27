"use client";
import { Poppins } from "@next/font/google";
import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFirebaseAuth } from "../contexts/auth-provider";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const { user } = useFirebaseAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (user?.uid) push("/home");
    else push("/auth/login");
    return () => {};
  }, [push, user?.uid]);

  return (
    <main className={poppins.className}>
      <Button>Ok</Button>
    </main>
  );
}
