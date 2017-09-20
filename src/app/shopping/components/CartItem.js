
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
      super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let {item} = this.props;
        console.log("cart item");
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <input value={item.qty} />
            </td>
            <td>
              {item.price * item.qty}
            </td>
            <td>
              <button>
                Update
              </button>
            </td>
            <td>
              <button>
                Remove
              </button>
            </td>
          </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}