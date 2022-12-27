"use client";
import { ChakraProvider } from "@chakra-ui/react";
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
            <main>{children}</main>
          </AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
