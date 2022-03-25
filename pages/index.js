import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavMenu from "../components/NavMenu";
import { motion } from "framer-motion";

export default function Home() {
  let arr = [
    "Hello, ",
    "I ",
    "am ",
    "Yegana ",
    "Abdullayeva",
    ". ",
    "I ",
    "am ",
    "a ",
    "software ",
    "developer ",
    "based ",
    "in ",
    "London",
    ".",
  ];
  return (
    <div className={styles.container}>
      <NavMenu />
      <motion.div>
        <motion.h1
          className={styles.title}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { delay: 0.5, staggerChildren: 0.18 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {arr.map((w, i) => {
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {w}
              </motion.span>
            );
          })}
        </motion.h1>
      </motion.div>
    </div>
  );
}
