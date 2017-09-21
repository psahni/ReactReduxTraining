
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default class ShoppingCart extends Component {
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
        this.props.addItemToCart(item);
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
        
    }
 

    toggleSummary() {
       
    }
    


    render() {

        console.log("cart render");
        
        let items = this.props.items;

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

            <CartList items={items}
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


ShoppingCart.defaultProps = {   
}

ShoppingCart.propTypes = {
}

ShoppingCart.childContextTypes = {
    offer: PropTypes.number
}