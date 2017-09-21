import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ShoppingCart 
    from "../components/ShoppingCart";

import * as actions from "../Actions";

//role
//take cartitems from store and pass to
//shoppingcart component as props

//shall be called by react-redux
//state => store.getState()
//this method called for every subscribe
function mapReduxStateToReactProp(state) {
    return {
        //propName: value
        items: state.cartItems
    }
}

//todo: actions/dispatch
function mapReduxDispatchToReactProps(dispatch) {
    return {
        //propFun: func

        //Option 1
        addItemToCart2: function(item) {
                           let action = actions.addItemToCart(item);
                           dispatch(action);
                        },
        // Option 2
        addItemToCart: bindActionCreators(actions.addItemToCart, dispatch),
        actions: bindActionCreators(actions, dispatch)
    }
}


let connectFn = connect(mapReduxStateToReactProp, mapReduxDispatchToReactProps);

//susbcribe/unsubscribe
//store.getState, pass state to props
let ShoppingCartContainerComponent = connectFn(ShoppingCart)

export default ShoppingCartContainerComponent;