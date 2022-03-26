import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import cartReducer from '../../redux/reducers/cartReducer'
import * as cartActions from '../../redux/actions/cartActions'

class CartSummary extends Component {
    componentDidMount() {

    }
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
                    Cart
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.carts.map(cart => {
                            return <DropdownItem key={cart.product.id}>
                                {cart.product.productName} | x{cart.quantity}
                            </DropdownItem>
                        })
                    }
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}
function mapStateToProps(state) {
    return {
        carts: state.cartReducer
    }
}

export default connect(mapStateToProps)(CartSummary)