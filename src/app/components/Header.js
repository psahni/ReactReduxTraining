import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <NavLink 
            className="button"
            to="/"
            exact
            activeClassName="success"
          >
            Home
          </NavLink>
          <NavLink 
            className="button"
            to="/about"
            activeClassName="success"
          >
            About
          </NavLink>
          <NavLink 
            className="button"
            to="/cart"
            activeClassName="success"
          >
            Cart
          </NavLink>
          <NavLink 
            className="button"
            to="/checkout"
            activeClassName="success"
          >
            Checkout [{this.props.cartLength}]
          </NavLink>            
        </div>
      </div>
    )
  }
}