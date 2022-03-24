import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from "redux"
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }
    selectCategory = (category) => {
        this.props.actions.changeCategory(category)
    }
    render() {
        return (
            <div>
                <h3 className='display-6'>Categories</h3>
                <ListGroup>
                    <ListGroupItem
                    active={this.props.currentCategory.id===0}
                    style={{"cursor":"pointer"}} 
                    onClick={()=>{
                        this.selectCategory({id:0})
                        this.props.actions.getProducts()}}>All Products</ListGroupItem>
                    {
                        this.props.categories.map(category => {
                            return <ListGroupItem active={category.id === this.props.currentCategory.id} style={{ cursor: "pointer" }} key={category.id}
                                onClick={() => {
                                    this.selectCategory(category)
                                    this.props.actions.getProducts(category.id)
                                }}
                            >
                                {category.categoryName}
                            </ListGroupItem>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
