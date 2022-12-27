"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "../contexts/auth-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ChakraProvider>
          <AuthProvider>
            <Box as='main'>{children}</Box>
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
