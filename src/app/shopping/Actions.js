import * as ActionTypes from "./ActionTypes";

//helper to create an action
export function addItemToCart(item) {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: item
        }
    }
}

export function removeItemFromCart(id) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}

export function emptyCart() {
    return {
        type: ActionTypes.EMPTY_CART
    }
}


export function updateItemInCart(id, qty) {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}