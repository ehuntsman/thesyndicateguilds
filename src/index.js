import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import store from './ducks/Store';

// error about reducer not a fuctgion - even though it isFinite. Fix later for Redux

ReactDOM.render(
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
, document.getElementById('root'));

// serviceWorker.unregister();