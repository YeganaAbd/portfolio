import NavMenu from "../components/NavMenu";
import styles from "../styles/Contact.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
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
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="4x"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yegana-abdullayeva-98425645/"
            passHref
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              size="4x"
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
