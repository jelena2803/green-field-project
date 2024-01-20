import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function NavbarSnippets() {
    return (
        <Navbar bg="light" data-bs-theme="light" className="justify-content-between">
            <Container>
                <Navbar.Brand className="text-center nav-brand"><Link to={'/dashboard'} className="links">Dashboard</Link></Navbar.Brand>
                <h4>SnipRepo</h4>
                <Button className="logout-btn">Logout</Button>
            </Container>
        </Navbar>
    )
}

export default NavbarSnippets;