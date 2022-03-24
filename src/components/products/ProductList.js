import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        return (
            <div>
                <h3 className='display-6'>Products:<Badge color='info'>{this.props.currentCategory.categoryName}</Badge></h3>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Category Id</th>
                            <th>ProductName</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => {
                                return <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.categoryId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
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
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
