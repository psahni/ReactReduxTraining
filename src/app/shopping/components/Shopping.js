
import React, {Component} from "react";
import PropTypes from "prop-types";

import Cart from './Cart';



export default class Shopping extends Component {
    constructor(props) {
      super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("shopping");
        return (
            <div> 
              <h2>Shopping</h2>
              <Cart>

              </Cart>
            </div>
        )
    }
} 


Shopping.defaultProps = {
    
}

Shopping.propTypes = {
    
}