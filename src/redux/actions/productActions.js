import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function getProducts() {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        fetch(url)
            .then(data => data.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}