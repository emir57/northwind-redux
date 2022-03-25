import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let index = state.cart.findIndex(x => x.product.id === action.payload.id);
            if(index === -1)
                state.cart.push(action.payload);
            else
                state.cart[index].quantity+=1;
            return state;
        default:
            return state;
    }
}