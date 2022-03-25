import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let item = state.find(x => x.product.id === action.payload.id);
            if (!item)
                return [...state,{...action.payload}]
            else {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.id) {
                        return Object.assign({}, item, { quantity: item.quantity + 1 })
                    }
                    return cartItem;
                });
                return newState;
            }
        default:
            return state;
    }
}