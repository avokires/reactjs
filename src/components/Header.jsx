import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import Link from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Invoice App</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/invoices">
                        <NavItem eventKey={1}>Invoices</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/products">
                        <NavItem eventKey={2}>Products</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/customers">
                        <NavItem eventKey={3}>Customers</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
        );
    }
};

// Header.propTypes = {
//     onStatusChange: React.PropTypes.func.isRequired
// };

export default Header;  