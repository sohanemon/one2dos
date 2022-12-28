import { app } from "./app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export async function add() {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
