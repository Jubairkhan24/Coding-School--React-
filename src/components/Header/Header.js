import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-nav">
            <Navbar variant="">
                <Container className="nav-style">
                    <Navbar.Brand className="text-light">Coding Bidyalaya </Navbar.Brand>
                    <Nav className=" nav-text-style">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/aboutus">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contactus">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;