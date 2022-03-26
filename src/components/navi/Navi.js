import React, { Component } from 'react'
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
                    <NavbarBrand href="/">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse 
                        navbar
                        >
                        <Nav
                            className="ms-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
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
