import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import { bindActionCreators } from 'redux'

class ProductList extends Component {
    componentDidMount(){
        this.props.actions.getProducts();
    }
    render() {
        return (
            <div>
                <h3 className='display-6'>Products:<Badge color='info'>{this.props.currentCategory.categoryName}</Badge></h3>
                {this.props.products.length}
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
function mapDispatchToProps(dispatch){
    return {
        actions:{
            getProducts:bindActionCreators(productActions.getProducts,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
