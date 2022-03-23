import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Offcanvas } from "react-bootstrap";
import styles from "./navmenu.module.css";
export default function NavMenu() {
  return (
    <Navbar
      className={styles.nav}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      expand={false}
    >
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: "20px", fontSize: "30px" }}>
          <Nav.Link className={styles.brand} href="/">
            Yegana Abdullayeva
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
