
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {  
  constructor(props) {
      super(props);
      this.state = {
        items: [],
        amount: 0,
        reload: true
      }
    }
    
    componentDidMount() {
       
    }

    toggleSummary() {
      // Set the internal state
      // call the render method
      this.setState({
        show: !this.state.show
      })
    }

    addItem() {
      let id = Math.ceil(Math.random() * 100000);      
      let item = {
          id: id,
          name: 'Product '  + id,
          price: Math.ceil(Math.random() * 1000),
          qty: 1
      }
      // Bad: Mutability
      // this.state.items.push(item);

      // GOOD
      //let clone = [...this.state.items];
      //clone.push(item);

      this.setState({
        items: [...this.state.items, item]
      }, () => {
        // callback, called after applying state
        // into current state
        this.recalculate();
      });


      // trigger render method directly
      //this.forceUpdate();
      //this.recalculate();
      //console.log("total items ", this.state.items.length);
    }

    removeItem(id) {
      this.setState({
        items: this.state.items.filter(item => item.id!=id)
      }, () => {
        this.recalculate()
      })
    }

    updateItem(id, qty) {

    }

    emptyCart() {

    }

    refresh() {
      //this.forceUpdate();
        this.setState({

        });
    }

    recalculate() {
      let total = 0;
      for (let item of this.state.items ) {
        total += item.qty * item.price;
      }

      this.setState({
        amount: total
      });
    }
    
    

    // cart has cart list
    // cart list has many cart items
    // cart item has many individual items

    render() {
        console.log("cart");
        return (
            <div> 
            <h2>Cart [{this.state.items.length}]</h2>
            <div>
              <button onClick={() => this.addItem()}>
                Add Item
              </button>
              <button>
                Empty
              </button>
              <button onClick={() => this.refresh()}>
                Refresh
              </button>
              <button onClick={() => this.toggleSummary()}>
                Summary
              </button>
            </div>
            <CartList 
              items={this.state.items}
              onUpdate={(id, qty) => this.updateItem(id, qty)}
              onRemove={(id) => this.removeItem(id)}
            >
            </CartList>

            { 
              this.state.show && <CartSummary amount={this.state.amount}></CartSummary>
            }
            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}