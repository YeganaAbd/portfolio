import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";
import Button from "react-bootstrap/Button";

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
          <Button variant="warning" size="lg">
            Github
          </Button>
          <Button variant="secondary" size="lg">
            Linkedin
          </Button>
          <Button variant="outline-primary" size="lg">
            <a
              styles={{ backgroundColor: "blue" }}
              href="mailto:abd.yegane@gmail.com"
            >
              Email
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
