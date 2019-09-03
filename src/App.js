import React from 'react';

import createAuth0Client from '@auth0/auth0-spa-js';
import { useAuth0 } from "./react-auth0-wrapper";
import './App.css';
import router from './router';

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;