import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import {createStore} from 'redux'
 
 import mainReducer from './reducer/mainreducer'
const store= createStore(mainReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


