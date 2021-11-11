import React from 'react';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img
                        alt=""
                        src={logo}

                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/explore">Explore Cars</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;