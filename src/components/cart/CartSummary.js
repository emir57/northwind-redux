import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap'
import cartReducer from '../../redux/reducers/cartReducer'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class CartSummary extends Component {
    componentDidMount() {

    }
    removeCartButton = () => {
        return {
            "display": "inline-block",
            "float": "right",
            "fontSize": "large",
            "backgroundColor": "#F2F3F4",
            "borderRadius": "6px",
            "padding": "1px"
        }
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
                                    <div className='text-danger' style={this.removeCartButton()}
                                        onClick={() => {
                                            this.removeFromCart(cart.product);
                                        }}
                                    >
                                        &times;
                                    </div>
                                </DropdownItem>
                            })
                        }
                        <DropdownItem divider />
                        <DropdownItem><Link to="/carts">Go to cart</Link></DropdownItem>
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