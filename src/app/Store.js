import {createStore, combineReducers} from 'redux';

import cartReducer from './shopping/Reducer';

// Create a root reducer

let rootReducer = combineReducers({
  cartItems: cartReducer
});

let store = createStore(rootReducer);

export default store;

console.log('Current State =>', store.getState());

