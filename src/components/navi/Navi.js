import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Nav, NavItem, NavLink, Navbar, NavbarBrand,
    NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap'
import CartSummary from '../cart/CartSummary'
export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <Link className='navbar-brand' to="/" style={{ "textDecoration": "none" }}>
                            reactstrap
                    </Link>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse
                        navbar
                    >
                        <Nav
                            className="ms-auto"
                            navbar
                        >
                            <NavItem>
                                <Link className='nav-link' to="/" style={{ "textDecoration": "none" }}>
                                    Products
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className='nav-link' to="/saveproduct" style={{ "textDecoration": "none" }}>
                                    Add Product
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/emir57">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <CartSummary />
                        </Nav>
                        <NavbarText>
                            Simple Text
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
