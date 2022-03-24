import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";

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
            <Button variant="warning" size="lg">
              Github
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yegana-abdullayeva-98425645/"
            passHref
          >
            <Button variant="secondary" size="lg">
              Linkedin
            </Button>
          </Link>
          <Link href="mailto:abd.yegane@gmail.com" passHref>
            <Button variant="danger" size="lg">
              Email
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
