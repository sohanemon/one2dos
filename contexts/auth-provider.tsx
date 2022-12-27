import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../type";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/app";

const auth = getAuth(app);
const FirebaseAuth = createContext<auth>({ user: null });
export const useFirebaseAuth = () => useContext(FirebaseAuth);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = 10;
  return (
    <FirebaseAuth.Provider value={{ user, googleLogin }}>
      {children}
    </FirebaseAuth.Provider>
  );
}
