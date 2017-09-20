
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends PureComponent { 
    
    // PureComponent will automatically call shouldComponentUpdate. We do not need to define ourselves.
    // Creation Stage: 1
    // Called once
    
    constructor(props) {
      super(props);
      this.state = {
        discount: 0
      }
      console.log("cart summary created");
    }
    
    // Creation Stage: 2
    // Called once
    // View is not ready
    
    componentWillMount() {
      console.log("summary will mount");
    }

    applyCoupon() {
      let n = Math.ceil(Math.random() * 100000);
      if (n%2 == 1) {
        console.log("apply coupon");
        this.setState({
          discount: this.props.amount * 0.20
        });
      } else {
        console.log("revoke coupon");
        this.setState({
          discount: 0
        });
      }
    }
    
    // Creation Stage: 3
    // returns view
    // called once during creation stage

    render() {
        console.log("cart summary");
        return (
            <div> 
              <h2>Cart Summary - {this.props.amount}</h2>
              <h2>Cart Discount - {this.props.amount}</h2>
              <h2> Total - {this.props.amount - this.state.discount}</h2>

              <button onClick={() => this.applyCoupon()}>
                Apply Coupon
              </button>
            </div>
        )
    }
    
    // Creation Stage: 4
    // View is ready
    componentDidMount() {
      console.log("summary mounted");
    }

    // Destruction Stage: 1
    componentWillUnmount() {
      console.log("summary unmounted");
    }
  
    // Updating Stage: 1. This is not been called on creation, but on updation cycle.
    componentWillReceiveProps(nextProps) {
      console.log("will receive props");
      console.log("Current", this.props.amount);
      console.log("Updated amount (incoming)", nextProps.amount);
    }

    // should component update
    // Updating Stage: 2
    // This method will call render method based on the returned value. Either it will be true or false.

    shouldComponentUpdate2(nextProps, nextState) {
      console.log("cart summary should update");
      if (this.props.amount != nextProps.amount || this.state.discount != nextState.discount ) {
        return true;
      }

      return false;
    }
} 



CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}