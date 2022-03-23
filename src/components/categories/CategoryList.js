import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import * as categoryActions from '../../redux/actions/categoryActions'

class CategoryList extends Component {
    componentDidMount(){
        this.props.actions.getCategories()
    }
    render() {
        return (
            <div>
                <h3 className='display-6'>Categories {this.props.categories.length}</h3>
                <h5>Seçili Kategori : {this.props.currentCategory.categoryName}</h5>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories:bindActionCreators(categoryActions.getCategories,dispatch)
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)
