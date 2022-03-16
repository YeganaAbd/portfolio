import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/NavMenu";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavMenu />
      <div>Yegana Abdulleyeva</div>
    </div>
  );
}
