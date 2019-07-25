import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <h1>Syndicate homepage</h1>

        <h2>Things to work on:</h2>
        <ul>
          <li>users</li>
          <li>roles</li>
          <li>magic</li>
          
        </ul>
      </div>
    )
  }
}

export default Home