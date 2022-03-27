import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import { Button } from 'reactstrap'
import alertify from 'alertifyjs'

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
    }
    addToCart = product=>{
        this.props.actions.addToCart(product);
        alertify.notify("Added To Cart "+product.productName,"success",5)
    }
    addProduct = ()=>{
        this.props.actions.addProduct({categoryId:1,productName:"Deneme",quantityPerUnit:"unit 1",unitPrice:688,unitsInStock:22})
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.addProduct()} color='primary'>Ürün Ekle</Button>
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
                            <th></th>
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
                                    <td>
                                        <Button color='info' onClick={() => {
                                            this.addToCart(product)
                                        }}>
                                            Add Cart
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
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart,dispatch),
            addProduct:bindActionCreators(productActions.saveProduct,dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
