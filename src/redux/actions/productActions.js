import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export function createProductSuccess(product) {
    return {
        type: actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: product
    }
}
export function updateProductSuccess(product) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: product
    }
}

export function saveProduct(product) {
    return fetch("http://localhost:3000/products/" + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(handleResponse)
        .catch(handleError)
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url)
            .then(data => data.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}