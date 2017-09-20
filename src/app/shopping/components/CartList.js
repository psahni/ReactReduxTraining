
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("cart list")
        let {items} = this.props;
        let rows = items.map(item => (<CartItem key={item.id} item={item}> </CartItem>));
        
        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <tbody>
                    <tr> 
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                    {rows}
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}