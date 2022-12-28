import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { app } from "./app";
import { toast } from "react-hot-toast";

const db = getFirestore(app);

export async function addToFS(todoDoc: unknown) {
  console.log(todoDoc);
  try {
    toast.promise(
      addDoc(collection(db, "todos"), {
        ...(todoDoc as object),
        timestamp: Timestamp.now(),
      }),
      {
        error: "Failed to add",
        loading: "Loading",
        success: "Added successfully",
      }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const readFromFS = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const data: todo[] = [];
  querySnapshot.forEach((doc) => {
    // @ts-ignore
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
