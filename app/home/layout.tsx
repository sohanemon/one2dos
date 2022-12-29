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
        columns={7}
        maxW='4xl'
        bg={"pink.100"}
        shadow='xl'
        mx={"auto"}
      >
        <GridItem colSpan={2}>
          <LeftSide />
        </GridItem>
        <GridItem colSpan={5}>{children}</GridItem>
      </SimpleGrid>
    </>
  );
}
