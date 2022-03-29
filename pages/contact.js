import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <NavMenu />
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <h1 className={styles.h1}>Get in Touch</h1>
          <p>
            Thank you for visiting my portfolio page. If you would like to find
            out more, then feel free to contact me.
          </p>
        </div>
        <div className={styles.connect}>
          <Link href="https://github.com/YeganaAbd" passHref>
            <FaGithub size={70} style={{ cursor: "pointer" }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yegana-abdullayeva-98425645/"
            passHref
          >
            <FaLinkedin
              size={70}
              style={{ color: "#0e76a8", cursor: "pointer" }}
            />
          </Link>
          <Link href="mailto:abd.yegane@gmail.com" passHref>
            <FaEnvelope
              size={70}
              style={{ color: "#B23121", cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
