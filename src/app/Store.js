import {createStore, combineReducers, applyMiddleware} from "redux";

import cartReducer from "./shopping/Reducer";
import checkoutReducer from "./shopping/CheckoutReducer";

import thunk from "redux-thunk";

let rootReducer = combineReducers({
    cartItems: cartReducer,
    order: checkoutReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

console.log("Curent state =>", store.getState());


function testAction(dispatch) {
    console.log("to be executed by thunk", dispatch);
}

store.dispatch(testAction);