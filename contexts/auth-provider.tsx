import { ReactNode, useEffect, useState } from "react";
import { createContext, useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/app";

const auth = getAuth(app);
const FirebaseAuth = createContext<auth>({ user: null });
export const useFirebaseAuth = () => useContext(FirebaseAuth);
export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // @ts-ignore
        setUser(user);
      } else {
        console.log("no previous user found");
        setUser(null);
      }
    });

    return () => {};
  }, []);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // @ts-ignore
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
