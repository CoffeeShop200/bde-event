import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '../assets/skalinata-logo.png';
import { Link, useNavigate } from 'react-router-dom';
function Navbar2() {
  const navigate = useNavigate();
  return (
    <>        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>       
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Link>
         <Navbar.Brand href="/">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/calendrier" className="nav-link">Calendrier</Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gérer Événements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gérer Réservations
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link">Se connecter</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default Navbar2
