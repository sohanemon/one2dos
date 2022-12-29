import { state } from "./../utils/state";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-hot-toast";
import { app } from "./app";

const db = getFirestore(app);

export async function addToFS(todoDoc: unknown) {
  try {
    toast.promise(
      addDoc(collection(db, "todos"), {
        ...(todoDoc as object),
        timestamp: Timestamp.now(),
      }),
      state
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
export const allTodos = async (uid: string) => {
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

export const unCompletedTodos = async (uid: string) => {
  const todosRef = collection(db, "todos");
  const q = query(
    todosRef,
    where("uid", "==", uid),
    where("done", "==", false)
  );
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
export const deleteTodo = async (id: string) => {
  toast
    .promise(deleteDoc(doc(db, "todos", id)), { ...state, success: "Deleted" })
    .then((_) => console.log(_));
};
