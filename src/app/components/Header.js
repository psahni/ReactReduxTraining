import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <a> Home </a>
          <a> Cart [] </a>
          <a> About </a>
        </div>
      </div>
    )
  }
}