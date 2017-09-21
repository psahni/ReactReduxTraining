import React from "react";
import {render} from 'react-dom';

//import {App} from './app/App';

import store from './app/Store';

// render(React.createElement(App), // virtual dom
//     document.getElementById("root") // real dom
// )

import {Provider} from 'react-redux';

import Routes from './app/Routes';

render(<Provider store={store}>
          <Routes/>
        </Provider>
    ,document.getElementById("root"));