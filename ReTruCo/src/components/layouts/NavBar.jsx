import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../common/CartWidget";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ReTruCo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Ropa y Accesorios</Nav.Link>
            <Nav.Link href="#link">Electrónica</Nav.Link>
            <NavDropdown title="Otros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Juguetes y Juegos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Plantas y Semillas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Material de Oficina y Escuela
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ropa Deportiva y Equipamiento
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
        <CartWidget />
      </div>
    </Navbar>
  );
}

export default NavBar;
