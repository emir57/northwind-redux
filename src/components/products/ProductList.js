import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3 className='display-6'>Products:<Badge color='info'>{this.props.currentCategory.categoryName}</Badge></h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer,
        products:state.productListReducer
    }
}
export default connect(mapStateToProps)(ProductList)
