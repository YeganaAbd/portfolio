import NavMenu from "../components/NavMenu";
import Link from "next/Link";
import Button from "react-bootstrap/Button";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <>
      <NavMenu />
      <div className={styles.aboutContainer}>
        <h1 className={styles.h1}>About me</h1>
        <p className={styles.about}>
          Hi, I am Yegana Abdullayeva. I have graduated from Computer
          Engineering in 2012. Later, gained master&apos;s degree in Computer
          Security from University of Birmingham. I have worked as a lecturer in
          Cryptography and HCI at a University in Azerbaijan for a few years. I
          had to leave my work due to relocation with my family. Also because my
          son was young, I didn&apos;t work for the past 4-5 years. Now I am
          looking forward to starting my career as a Software Engineer to work
          on real-world problems and potentially improve people&apos;s lives
          through software. You can view my resume here:
        </p>

        <Link
          download
          href="https://soc-bootcamper-showcase-media.s3.eu-west-2.amazonaws.com/Yegana_Abdullayeva_10a601f6cd.pdf"
          passHref
        >
          <Button variant="warning">Resume</Button>
          {/* </Link> */}
        </Link>
      </div>
    </>
  );
}
