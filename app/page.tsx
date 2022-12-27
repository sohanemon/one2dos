import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "./page.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return <main className={poppins.className}></main>;
}
