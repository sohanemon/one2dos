"use client";
import { Box, Stack } from "@chakra-ui/react";

export default function Layout({ children }: child) {
  return (
    <Stack>
      <Box bg={"pink.500"} py='3' textAlign={"center"} color='white'>
        Website under construction! Please use Google Sign In method.
      </Box>
      {children}
    </Stack>
  );
}
