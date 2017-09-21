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

export function updateOrderData(order) {
    return {
        type: "ORDER_DATA",
        payload: {
            order: order
        }
    }
}


export function sendOrderToServer(order, items) {
    return function(dispatch) {
        return fetch('http://localhost:7070/api/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               info: order,
               items: items
            })
          })
          .then ( response => response.json())
          .then ( orderData => {
                let action = {
                    type: 'ORDER_SUCCESS'
                }
                dispatch(action)
          })
    }
   
}