import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const NavbarComponent = () => {
  return (
    <div className="cont">
      <Navbar style={{ background: "#cb8e00", opacity: "0.8" }} variant="dark">
        <Container>
          <Navbar.Brand
            style={{
              color: "black",
              fontSize: "xx-large",
              fontStyle: "italic",
            }}
          >
            YummyMeal
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" activeClassName="activeLink" className="link">
              Home
            </Link>
            <Link to="/meals" className="link" activeClassName="activeLink">
              Meals
            </Link>
            <Link to="/about" className="link" activeClassName="activeLink">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
