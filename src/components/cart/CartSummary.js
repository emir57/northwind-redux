import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import cartReducer from '../../redux/reducers/cartReducer'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'

class CartSummary extends Component {
    componentDidMount() {

    }
    removeFromCart = product => {
        this.props.actions.removeToCart(product);
    }
    getCarts = () => {
        if (this.props.carts.length > 0) {
            return (
                <UncontrolledDropdown
                    inNavbar
                    nav
                >
                    <DropdownToggle
                        caret
                        nav
                    >
                        Cart ({this.props.carts.length})
                    </DropdownToggle>
                    <DropdownMenu end>
                        {
                            this.props.carts.map(cart => {
                                return <DropdownItem key={cart.product.id}>
                                    <Badge color='info'>{cart.quantity}</Badge> {cart.product.productName}
                                    <div className='text-danger' style={{ "display": "inline-block", "float": "right", "fontSize": "large" }}
                                        onClick={() => {
                                            this.removeFromCart(cart.product);
                                        }}
                                    >
                                        &times;
                                    </div>
                                </DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </UncontrolledDropdown>
            )
        }
        return (
            <UncontrolledDropdown
                    inNavbar
                    nav
                >
                    <DropdownToggle
                        nav
                    >
                        Empty Cart
                    </DropdownToggle>
                </UncontrolledDropdown>
        )

    }
    render() {
        return (
            this.getCarts()
        )
    }
}
function mapStateToProps(state) {
    return {
        carts: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeToCart: bindActionCreators(cartActions.removeToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)