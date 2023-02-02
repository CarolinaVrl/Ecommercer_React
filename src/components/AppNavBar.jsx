import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../assets/pages/Cart';

const AppNavBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const logOut = () => {
        localStorage.setItem('token', '')
    }
    return (
        <div className='navbar'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')} style={{ color: '#f85555' }} >E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to='/login'><i className="fa-solid fa-user"></i></Nav.Link>
                            <Nav.Link as={Link} to='/purchase'><i className="fa-solid fa-box-archive"></i></Nav.Link>
                            <Nav.Link onClick={()=>handleShow()}><i className="fa-solid fa-cart-shopping"></i></Nav.Link>
                            <Nav.Link onClick={() => logOut()} as={Link} to='/login'>Log Out</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose}/>
            
        </div>
    );
};

export default AppNavBar;