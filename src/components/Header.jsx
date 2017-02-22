import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Invoice App</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Invoices</NavItem>
                    <NavItem eventKey={2} href="#">Products</NavItem>
                    <NavItem eventKey={3} href="#">Customers</NavItem>
                </Nav>
            </Navbar>
        );
    }
};

// Header.propTypes = {
//     onStatusChange: React.PropTypes.func.isRequired
// };

export default Header;  