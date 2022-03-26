import React, { Component } from 'react'
import { UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'

export default class CartSummary extends Component {
    render() {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Options
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}
