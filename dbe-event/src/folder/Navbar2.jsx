import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/skalinata-logo.png';

function Navbar2() {
  const navigate = useNavigate();

  return (
    <>
      {/* Styles CSS injectés pour les effets de survol */}
      <style>
        {`
          .custom-nav-link {
            color: #000000 !important;
            transition: color 0.2s ease-in-out;
          }
          .custom-nav-link:hover {
            color: #FF0000 !important;
          }

          /* Style pour le titre du menu déroulant Admin */
          .custom-dropdown .dropdown-toggle {
            color: #000000 !important;
            transition: color 0.2s ease-in-out;
          }
          .custom-dropdown .dropdown-toggle:hover {
            color: #FF0000 !important;
          }

          /* Style pour les sous-éléments du menu Admin */
          .custom-dropdown-item {
            color: #000000 !important;
            transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
            font-weight: 600;
          }
          .custom-dropdown-item:hover {
            color: #FF0000 !important;
            background-color: #FFF5F5 !important;
          }

          /* Style et animation du logo */
          .navbar-logo {
            height: 55px;
            object-fit: contain;
            transition: transform 0.25s ease, filter 0.25s ease;
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
          }
          .navbar-logo:hover {
            transform: scale(1.04);
            filter: drop-shadow(0px 4px 8px rgba(255, 0, 0, 0.2));
          }
        `}
      </style>

      <Navbar expand="lg" className="bg-white border-bottom shadow-sm py-2">
        <Container> 
          {/* Logo optimisé */}
          <Link to="/" className="navbar-brand d-flex align-items-center py-1">
            <img
              src={logo}
              alt="Skalinata Logo"
              className="navbar-logo d-inline-block align-top"
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation principale */}
            <Nav className="me-auto ms-lg-4 gap-lg-3 fw-bold">
              <Link to="/" className="nav-link custom-nav-link">
                Accueil
              </Link>
              <Link to="/calendrier" className="nav-link custom-nav-link">
                Calendrier
              </Link>
              
              {/* Menu Admin */}
              <NavDropdown title="Admin" id="basic-nav-dropdown" className="fw-bold custom-dropdown">
                <NavDropdown.Item 
                  as={Link} 
                  to="/admin/gerer-event" 
                  className="custom-dropdown-item py-2"
                >
                  Gérer Événements
                </NavDropdown.Item>
                <NavDropdown.Item 
                  as={Link} 
                  to="/admin/gerer-reservations" 
                  className="custom-dropdown-item py-2"
                >
                  Gérer Réservations
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Bouton de connexion */}
            <Nav className="ms-auto align-items-lg-center">
              <button 
                onClick={() => navigate('/login')}
                className="btn btn-danger text-uppercase fw-black px-4 py-2 border-0 shadow-sm"
                style={{ 
                  backgroundColor: '#FF0000', 
                  fontWeight: 800, 
                  fontSize: '0.9rem',
                  letterSpacing: '0.5px'
                }}
              >
                Se connecter
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;