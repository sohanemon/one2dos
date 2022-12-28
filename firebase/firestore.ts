import {
  addDoc,
  collection,
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
