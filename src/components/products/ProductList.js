import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3 className='display-6'>Products:{this.props.currentCategory.categoryName}</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer
    }
}
export default connect(mapStateToProps)(ProductList)
