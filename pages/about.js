import NavMenu from "../components/NavMenu";
import NextLink from "next/link";
import Button from "react-bootstrap/Button";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <NavMenu />
      <motion.div
        className={styles.aboutContainer}
        animate={{ x: [-50, 0], opacity: [0, 1] }}
      >
        <div>
          <h1 className={styles.h1}>About me</h1>
          <p className={styles.about}>
            Hi, I am Yegana Abdullayeva. I have graduated from Computer
            Engineering in 2012. Later, gained master&apos;s degree in Computer
            Security from the University of Birmingham. I have worked as a
            lecturer in Cryptography and HCI at a University in Azerbaijan for a
            few years. I had to leave my work due to relocation with my family.
            Also because my son was young, I didn&apos;t work for the past 4-5
            years. Now I am looking forward to starting my career as a Software
            Engineer to work on real-world problems and potentially improve
            people&apos;s lives through software. You can view my resume here:
          </p>
        </div>

        <motion.div
          className={styles.resume}
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.5 }}
        >
          <NextLink
            download
            target="_blank"
            href="https://www.canva.com/design/DAE4X4nutYY/FLsZ0QtJS8GVNbCx4ER8sw/view?utm_content=DAE4X4nutYY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
            passHref
          >
            <Button variant="warning">Resume</Button>
          </NextLink>
        </motion.div>
      </motion.div>
    </>
  );
}
