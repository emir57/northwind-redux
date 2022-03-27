import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table,Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'

class CartDetail extends Component {
    removeFromCart = product => {
        this.props.actions.removeFromCart(product);
        alertify.notify("Removed to cart " + product.productName, "error", 3)
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.carts.map(cart => {
                                return <tr key={cart.product.id}>
                                    <td>{cart.product.productName}</td>
                                    <td>{cart.product.unitPrice}</td>
                                    <td>{cart.quantity}</td>
                                    <td>
                                        <Button onClick={()=>this.removeFromCart(cart.product)} color='danger'>
                                            Remove to cart
                                        </Button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
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
            removeFromCart: bindActionCreators(cartActions.removeToCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
