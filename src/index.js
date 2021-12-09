import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter  } from 'react-router-dom';

import store from './redux/store'

ReactDOM.render(
  <Provider store = {store}>
    <HashRouter base="/">
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
