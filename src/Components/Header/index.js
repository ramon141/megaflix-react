import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import imgLogo from '../../assets/logo.png';

export default function Header() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container fluid={true}>
        <Navbar.Brand href="/"> <img src={imgLogo} width="58px" alt="MegaFlix Logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Início</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Monstr</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <form>
            <div className="searchbar">
              <input className="search_input" type="text" placeholder="Buscar..." minlength="3" required="" />
              <a className="search_icon" href="#teste" >
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </form>

          <Nav>
            <NavDropdown title="Megaflix" id="collasible-nav-dropdown" drop='down' align="end">
              <NavDropdown.Item href="#action/3.1">Lista de favoritos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Entrar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Registrar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}