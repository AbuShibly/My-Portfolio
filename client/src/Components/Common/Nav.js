import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../Assets/Images/image.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "../Assets/Styles/Home.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="z-3 position-sticky top-0 bg-white"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" width={25} />
        </Navbar.Brand>

        <HiOutlineMenuAlt3
          className="menu-icon d-lg-none"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link id="lora-nav" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="lora-nav" href="#about">
              About
            </Nav.Link>
            <Nav.Link id="lora-nav" href="#education">
              Education
            </Nav.Link>
            <Nav.Link id="lora-nav" href="#project">
              Projects
            </Nav.Link>
            <Nav.Link id="lora-nav" href="#footer">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
