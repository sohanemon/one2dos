"use client";
import { Poppins } from "@next/font/google";
import { Button } from "@chakra-ui/react";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={poppins.className}>
      <Button>Ok</Button>
    </main>
  );
}
