import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions'

class CartDetail extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeToCart,dispatch)
        }
    }
}

export default connect(mapDispatchToProps)(CartDetail);
