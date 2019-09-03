import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './ducks/Store';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
