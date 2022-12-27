import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { auth } from "../type";

const FirebaseAuth = createContext<auth>({ value: 0 });
export const useFirebaseAuth = () => useContext(FirebaseAuth);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const value = 10;
  return (
    <FirebaseAuth.Provider value={{ value }}>{children}</FirebaseAuth.Provider>
  );
}
