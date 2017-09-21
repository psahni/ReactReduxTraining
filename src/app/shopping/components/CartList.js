
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("next cart list ", nextProps.items.length);
        console.log("current cart list ", this.props.items.length);
        if ( this.props.items != nextProps.items) {
            return true;
        }

        return false;
    }
    
    render() {
        console.log("cart list render")
        let {items} = this.props;
        let rows = items.map(item => (
            <CartItem 
                key={item.id} 
                item={item} 
                onRemove={this.props.onRemove}
                onUpdate={this.props.onUpdate}
            > 
            </CartItem>)
        );
        
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