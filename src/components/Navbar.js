import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
export default function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Expenditure Tracker</Navbar.Brand>
                <Link className="btn btn-danger" to="/exp">Add Expenditure</Link>
                <Link className="btn btn-success" to="/inc">Add Income</Link>
            </Container>
        </Navbar>
    )
}