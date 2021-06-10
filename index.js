
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux';
import {store} from "./store"

  // jsx expression in react
//ctrl +d, shift+alt+mouse

                  

ReactDOM.render(  
<>
<Provider store={store }>
  <App/>
</Provider>
  
</>,
  
  document.getElementById('root'));
  // jsX javascript extension
 