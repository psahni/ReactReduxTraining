import {render} from "react-dom";
import React from "react";

import Header from './containers/Header';
import Footer from './components/Footer';

import Shopping from './shopping/components/Shopping';
import PropTypes from "prop-types";


export class App extends React.Component {
    constructor() {
      super();
    }

    getChildContext() {
        return {
            theme: 'white',
            appName: 'my app name'
        }
    }

    render() {
        //return React.createElement('h1', null, 'React App');
        return (
            <div>
                <Header title="Product App"/>
                    {/* <Shopping>
                    </Shopping> */}
                   <div>
                     {this.props.children}
                   </div>
                <Footer company="React App" year={2017}/>
            </div>
        )
    }
}

//render(<App/>, document.getElementById('root'))

App.childContextTypes = {
  theme: PropTypes.string,
  appName: PropTypes.string
}