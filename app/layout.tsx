"use client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Poppins } from "@next/font/google";
import AuthProvider from "../contexts/auth-provider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
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
            <Box className={poppins.className} as='main'>
              {children}
            </Box>
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
