import classes from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      sticky="top"
      data-bs-theme="dark"
      expand="md"
      className={classes.headerGreen}
    >
      <Container className="py-2">
        <Navbar.Brand className="fs-1 d-flex align-items-center gap-2" href="/">
          <FaCar style={{color:"#FFD700"}} />
          <div className="fw-bold">Car Rental</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 gap-3">
            <Nav.Link as={Link} to={""} href="#home">
              Our Fleet
            </Nav.Link>
            <Nav.Link as={Link} to={"blog"}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={"contact"} href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
