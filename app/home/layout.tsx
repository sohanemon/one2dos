"use client";
import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import LeftSide from "./leftSide";

export default function Layout({ children }: child) {
  return (
    <>
      <SimpleGrid
        rounded={"xl"}
        p='4'
        my='10'
        columns={4}
        maxW='4xl'
        bg={"pink.100"}
        shadow='xl'
        mx={"auto"}
      >
        <LeftSide />
        <GridItem colSpan={3}>{children}</GridItem>
      </SimpleGrid>
    </>
  );
}
