"use client";
import { Box, grid, SimpleGrid } from "@chakra-ui/react";
import LeftSide from "./leftSide";
import Navbar from "./navbar";

export default function Page() {
  return (
    <SimpleGrid columns={4} maxW='4xl' bg={"skyblue"} mx={"auto"}>
      <LeftSide />
      <Box>ok</Box>
    </SimpleGrid>
  );
}
