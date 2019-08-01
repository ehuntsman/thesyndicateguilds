import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class Home extends Component {
  
  //runs when the code starts
  componentDidMount(){
    //this.function();
  }

  //initialize functions here

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
        <Link to='/guilds'>guilds</Link>
      </div>
    )
  }
}



export default Home