
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

import store from '../../Store';
import * as actions from "../Actions";

export default class ReduxCart extends Component {
    constructor(props) {
        super(props);
 
    }

    getChildContext() {
        return {
          offer: 30
        }
    }

    addItem() {
        let id = Math.ceil(Math.random() * 100000);

        let item = {
            id: id,
            name: 'Product '  + id,
            price: Math.ceil(Math.random() * 1000),
            qty: 1
        }
        
        let action = actions.addItemToCart(item);
        // This will call reducer
        store.dispatch(action);
        console.log("get state => ", store.getState());
    }

    removeItem(id) {
         

    }

    updateItem(id, qty) {
        

    }

    emptyCart() {

    }

    refresh() {
       
    }
 
    
    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        this.setState({})
      });    
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    toggleSummary() {
       
    }
    


    render() {
        console.log("cart render");
        let state = store.getState();
        let items = state.cartItems;

        return (
            <div> 
            <h2>Cart [{items.length}]</h2>

            <div>
                <button onClick={ ()=> this.addItem()} >
                    Add Item
                </button>

                <button >
                    Empty
                </button>

                <button onClick={ () => this.refresh()}>
                    Refresh
                </button>

                <button onClick={ ()=> this.toggleSummary()}>
                    Summary
                </button>
            </div>

            <CartList 
              items={items}
              onUpdate = { (id, qty) => this.updateItem(id, qty)}
              onRemove = { (id) => this.removeItem(id)}

            >
            </CartList>

           { <CartSummary >
             </CartSummary>
           }
            </div>
        )
    }
} 


ReduxCart.defaultProps = {
    
}

ReduxCart.propTypes = {
    
}


ReduxCart.childContextTypes = {
    offer: PropTypes.number
}