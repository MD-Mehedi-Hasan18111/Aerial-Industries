import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavbarBrand
          className="mr-3"
          style={{ marginLeft: "1rem", marginRight: "1rem", fontWeight: "700" }}
        >
          Home
        </NavbarBrand>
      </Link>
      <Link to="/ipollen8" style={{ textDecoration: "none" }}>
        <NavbarBrand style={{ color: "#888", fontWeight: "700" }}>
          iPollen8
        </NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto text-center" navbar>
          <Link to="/funders" style={{ textDecoration: "none" }}>
            <NavItem>
              <NavLink>Funders</NavLink>
            </NavItem>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <NavItem>
              <NavLink>Suppliers</NavLink>
            </NavItem>
          </Link>
          <Link to="/farmers" style={{ textDecoration: "none" }}>
            <NavItem>
              <NavLink>Farmers</NavLink>
            </NavItem>
          </Link>
          <NavItem>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <NavLink style={{ padding: "0" }}>
                <Button
                  outline
                  style={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    padding: "0.5rem 2rem",
                    fontWeight: "500",
                  }}
                >
                  Connect
                </Button>
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
