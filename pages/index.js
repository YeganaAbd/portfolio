import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/NavMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavMenu />
      <h1 className={styles.title}>
        Hello, I am Yegana Abdullayeva. I am a software developer based in
        London.
      </h1>
    </div>
  );
}
