import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return state;
        default:
            return state;
    }
}