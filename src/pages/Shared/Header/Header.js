import React from 'react';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logoutUser } = useAuth();

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
                        {user.email && <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>}
                        {
                            !user?.email ? <Nav.Link as={NavLink} to="/login">Login</Nav.Link> : <button onClick={logoutUser}>Logout</button>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;