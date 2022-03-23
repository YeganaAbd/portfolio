import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./navmenu.module.css";
export default function NavMenu() {
  return (
    <Navbar
      className={styles.nav}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand style={{ marginLeft: "20px", fontSize: "30px" }}>
        <Nav.Link className={styles.brand} href="/">
          Yegana Abdullayeva
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{ marginRight: "20px", fontSize: "24px" }}
          className="ms-auto"
        >
          <Nav.Link
            className={styles.link}
            style={{ marginRight: "20px" }}
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            style={{ marginRight: "20px", fontSize: "24px" }}
            href="/about"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            style={{ marginRight: "20px", fontSize: "24px" }}
            href="/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            style={{ marginRight: "20px", fontSize: "24px" }}
            href="/contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
