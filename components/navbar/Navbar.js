import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function NavMenu(props) {
  let CategoryTreeNavDropdown = null;
  if (props.CategoryTree) {
    CategoryTreeNavDropdown = props.CategoryTree.map((item, id) => {
      const NavDropdownItem = item.children.map((item2, id2) => (
        <Link href={"/" + item2.url_key} passHref key={id2}>
          <NavDropdown.Item>{item2.name}</NavDropdown.Item>
        </Link>
      ));
      return (
        <NavDropdown
          key={id}
          title={item.name}
          id={"navbarDropdown-" + item.name}
        >
          {NavDropdownItem}
        </NavDropdown>
      );
    });
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/pricing" passHref>
              <Nav.Link>Pricing</Nav.Link>
            </Link>
            <Link href="/enable-cookies" passHref>
              <Nav.Link>Enable Cookies</Nav.Link>
            </Link>
            <Link href="/pricing" passHref>
              <Nav.Link>Pricing</Nav.Link>
            </Link>
            <Link href="/privacy-policy-cookie-restriction-mode" passHref>
              <Nav.Link>Privacy Policy</Nav.Link>
            </Link>
            {CategoryTreeNavDropdown}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Link href="/cart" passHref>
              <Button variant="outline-secondary mx-2"><FontAwesomeIcon icon={faShoppingCart} /></Button>
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
