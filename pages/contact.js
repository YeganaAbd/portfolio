import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";
import NextLink from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <NavMenu />
      <motion.div
        className={styles.contactContainer}
        animate={{ x: [-50, 0], opacity: [0, 1] }}
      >
        <div className={styles.contact}>
          <h1 className={styles.h1}>Get in Touch</h1>
          <p className={styles.text}>
            Thank you for visiting my portfolio page. If you would like to find
            out more, then feel free to contact me.
          </p>
        </div>
        <motion.div
          className={styles.connect}
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.5 }}
        >
          <NextLink href="https://github.com/YeganaAbd" passHref>
            <FaGithub size={70} style={{ cursor: "pointer" }} />
          </NextLink>
          <NextLink
            href="https://www.linkedin.com/in/yegana-abdullayeva-98425645/"
            passHref
          >
            <FaLinkedin
              size={70}
              style={{ color: "#0e76a8", cursor: "pointer" }}
            />
          </NextLink>
          <NextLink href="mailto:abd.yegane@gmail.com" passHref>
            <FaEnvelope
              size={70}
              style={{ color: "#B23121", cursor: "pointer" }}
            />
          </NextLink>
        </motion.div>
      </motion.div>
    </>
  );
}
