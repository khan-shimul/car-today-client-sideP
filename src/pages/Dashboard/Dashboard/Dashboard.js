import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AddCar from '../AddCar/AddCar';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <>
            <div className="d-flex">
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="w-25 border-end me-2">
                    <Container>
                        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="d-flex flex-column">
                                <Nav.Link as={NavLink} to={`${url}`}>My Orders</Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/pay`}>Payment</Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/review`}>Review</Nav.Link>

                                <Nav.Link as={NavLink} to={`${url}/manage-orders`}>Manage All Orders</Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/add-car`}>Add New Car</Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/make-admin`}>Make Admin</Nav.Link>
                                <Nav.Link as={NavLink} to={`${url}/manage-products`}>Manage Products</Nav.Link>

                                <Button>Logout</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Switch>
                        <Route exact path={path}>
                            <h3>My Orders</h3>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <h2>Payment system coming soon...!</h2>
                        </Route>
                        <Route path={`${path}/review`}>
                            <h2>Review system coming soon...!</h2>
                        </Route>
                        <Route path={`${path}/manage-orders`}>
                            <h2>Manage All Orders</h2>
                        </Route>
                        <Route path={`${path}/add-car`}>
                            <AddCar />
                        </Route>
                        <Route path={`${path}/make-admin`}>
                            <h2>Make Admin</h2>
                        </Route>
                        <Route path={`${path}/manage-products`}>
                            <h2>Manage Products</h2>
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Dashboard;