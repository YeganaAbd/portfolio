import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand style={{ marginLeft: "20px", fontSize: "30px" }}>
        Yegana Abdullayeva
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{ marginRight: "20px", fontSize: "24px" }}
          className="ms-auto"
        >
          <Nav.Link style={{ marginRight: "20px" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link
            style={{ marginRight: "20px", fontSize: "24px" }}
            href="/about"
          >
            About
          </Nav.Link>
          <Nav.Link
            style={{ marginRight: "20px", fontSize: "24px" }}
            href="/projects"
          >
            Projects
          </Nav.Link>
          <Nav.Link
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
