
import React, {Component} from "react";
import PropTypes from "prop-types";

import Cart from "./Cart.1";

import ReduxCart from "./ReduxCart";

import ShoppingCart 
        from "../containers/ShoppingCart";

 
export default class Shopping extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
       
    }
     

    render() {
        console.log("shopping render");

        return (
            <div> 
            <h2>Shopping</h2>

            <ShoppingCart>

            </ShoppingCart>

{/* 
             <ReduxCart>
             </ReduxCart> */}

            {/* <Cart>

            </Cart>
             */}
            </div>
        )
    }
} 


Shopping.defaultProps = {
    
}

Shopping.propTypes = {
    
}