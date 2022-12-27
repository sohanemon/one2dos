import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { auth } from "../type";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/app";

const auth = getAuth(app);
const FirebaseAuth = createContext<auth>({});
export const useFirebaseAuth = () => useContext(FirebaseAuth);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {});
  };

  const value = 10;
  return (
    <FirebaseAuth.Provider value={{ googleLogin }}>
      {children}
    </FirebaseAuth.Provider>
  );
}
