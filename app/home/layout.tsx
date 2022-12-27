"use client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import LeftSide from "./leftSide";

export default function Layout({ children }: child) {
  return (
    <>
      <SimpleGrid
        rounded={"xl"}
        p='4'
        mt='10'
        columns={4}
        maxW='4xl'
        bg={"pink.100"}
        shadow='xl'
        mx={"auto"}
      >
        <LeftSide />
        <Box>{children}</Box>
      </SimpleGrid>
    </>
  );
}
