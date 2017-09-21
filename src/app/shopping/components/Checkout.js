
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    onValueChange(e) {
        let target = e.target;

        let fieldName = target.name;
        let value = target.value;

        let clone = Object.assign({}, 
                                  this.props.order, 
                                  {
                                      [fieldName]: value
                                  })

        this.props.actions.updateOrderData(clone)
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.actions.sendOrderToServer(this.props.order, 
                                             this.props.items)
    }
    
    render() {

        let order = this.props.order;

        return (
            <div> 
            <h2>Checkout</h2>

            <form onSubmit={(e) => this.handleSubmit(e)} >
               Name
               <input value={order.fullname} 
                      name= 'fullname'
                      type="text"
                      onChange={(e) => this.onValueChange(e) }
                />

                Email
               <input value={order.email} 
                      name= 'email'
                      type="email"
                      onChange={(e) => this.onValueChange(e) }
                />

               <button type="submit">Checkout</button>


            </form>
            </div>
        )
    }
} 


Checkout.defaultProps = {
    
}

Checkout.propTypes = {
    
}