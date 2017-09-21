import React from "react";
import {render} from 'react-dom';

import {App} from './app/App';

import store from './app/Store';

// render(React.createElement(App), // virtual dom
//     document.getElementById("root") // real dom
// )

import {Provider} from 'react-redux';

render(<Provider store={store}>
          <App/>
        </Provider>
    ,document.getElementById("root"));