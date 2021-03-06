import {render} from "react-dom";
import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';

import Shopping from './shopping/components/Shopping';

export class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        //return React.createElement('h1', null, 'React App');
        return (
            <div>
                <Header title="Product App"/>
                    <Shopping>
                    </Shopping>
                <Footer company="React App" year={2017}/>
            </div>
        )
    }
}
//render(<App/>, document.getElementById('root'))
