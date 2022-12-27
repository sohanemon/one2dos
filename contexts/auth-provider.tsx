import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { auth } from "../type";

const FirebaseAuth = createContext<auth>({});
export const useFirebaseAuth = () => useContext(FirebaseAuth);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const value = 10;
  return <FirebaseAuth.Provider value={{}}>{children}</FirebaseAuth.Provider>;
}
