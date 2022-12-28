import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  updateDoc,
  where,
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

const readFromFSv1 = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const data: todo[] = [];
  querySnapshot.forEach((doc) => {
    // @ts-ignore
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};
export const readFromFS = async (uid: string) => {
  const todosRef = collection(db, "todos");
  const q = query(
    todosRef,
    where("uid", "==", uid)
    // where("done", "==", false)
  );
  const querySnapshot = await getDocs(q);

  const data: todo[] = [];
  querySnapshot.forEach((doc) => {
    // @ts-ignore
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const completedTodos = async (uid: string) => {
  const todosRef = collection(db, "todos");
  const q = query(todosRef, where("uid", "==", uid), where("done", "==", true));
  const querySnapshot = await getDocs(q);

  const data: todo[] = [];
  querySnapshot.forEach((doc) => {
    // @ts-ignore
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
};

export const updateTodo = async (id: string, done: boolean) => {
  const docRef = doc(db, "todos", id);
  await updateDoc(docRef, {
    done: done,
  });
};
