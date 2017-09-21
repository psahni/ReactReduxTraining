
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props, context) {
        super(props);

        this.state = {
            qty: props.item.qty
        }
    }
    
    componentDidMount() {

        //Real DOM
        //react do not track
        this.input.focus();

        //uncontrolled component
        //this.input.value = this.props.item.qty;
        
    }

    onChangeValue(e) {
        let target = e.target; //input box
        
        this.setState({
            qty: target.value
        });
    }
    
    render() {

        let {item} = this.props;

        console.log("cart item render");
        return (
            <tr>
                <td> 
                    {item.name} 
                    <br />
                    Offer: {this.context.offer}
                    <br />
                    Theme: {this.context.theme}
                </td>

                <td> {item.price} </td>

                <td> 
                     <input  ref={(elem) => this.input = elem}
                             type="number"
                             value={this.state.qty}
                             onChange={(e) => this.onChangeValue(e)}
                     />
                </td>


                <td> 
                     {item.price * this.state.qty}
                </td>

                <td>
                    <button onClick={() => this.props.onUpdate(item.id, this.state.qty)} >
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={() => this.props.onRemove(item.id)} >
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

CartItem.contextTypes = {
    theme: PropTypes.string,
    offer: PropTypes.number
}