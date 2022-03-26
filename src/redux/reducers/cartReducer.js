import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
export default function cartReducer(state = initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let name = "";
            if (action.payload.productName.length > 6) {
                action.payload.productName = action.payload.productName.substr(0, 6) + "...";
            }
            let item = state.find(x => x.product.id === action.payload.id);
            if (!item) {
                state = state.slice();
                state.push(Object.assign({ quantity: 1, product: action.payload }));
                return state;
            }
            else {
                let newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.id) {
                        return Object.assign({}, item, { quantity: item.quantity + 1 })
                    }
                    return cartItem;
                });
                return newState;
            }
        case actionTypes.REMOVE_FROM_CART:
            state = state.slice();
            let index = state.findIndex(x => x.product.id === action.payload.id);
            if (state[index].quantity > 1) {
                state[index].quantity -= 1;
            } else {
                state.splice(index, 1);
            }
        default:
            return state;
    }
}