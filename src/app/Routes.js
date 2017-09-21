import React from "react";

import {HashRouter as Router,
       Switch, 
       Route} from "react-router-dom";

import {App} from "./App";
import About from "./components/About";
import Home from "./components/Home";

import Shopping from "./shopping/components/Shopping";
import Checkout from "./shopping/containers/Checkout";

//functional components
export default function Routes() {
    return (
        <Router>
            <App>
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/cart" component={Shopping} />
                        <Route path="/checkout" component={Checkout} />
                </Switch>
            </App>
        </Router>
    )
}