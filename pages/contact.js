import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <NavMenu />
      <div className={styles.contact}>
        <h1>Get in Touch</h1>
        <p>
          Thank you for visiting my portfolio page. If you would like to find
          out more, then feel free to contact me.
        </p>
      </div>
      <div className={styles.connect}>
        <p>Github</p>
        <p>Linkedin</p>
        <p>Email</p>
      </div>
    </div>
  );
}
