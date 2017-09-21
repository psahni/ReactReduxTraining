
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
        console.log("cart item render");
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
              <button onClick={() => this.props.onRemove(item.id)}>
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