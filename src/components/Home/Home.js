import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import Auth0Context instead of useAuth0
import { Auth0Context } from "../../react-auth0-wrapper";

import './home.css';

class Home extends Component {
    
    //runs when the code starts
    componentDidMount(){
      //this.function();
    }
    //initialize functions here


    // Assign the context type to a static property
    static contextType = Auth0Context;
    render(): JSX.Element {
      // Destructure the values you need from this.context instead of useAuth0
      const { isAuthenticated, loginWithRedirect, logout } = this.context;
  
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

          <Link to="/user/profile">Profile</Link>

          <Link to="/login">Login</Link>
          <button
            onClick={() =>
              loginWithRedirect({})
            }
          >
            Log in
          </button>
          <button onClick={() => logout()}>Log out</button>

        </div>
      );
    }
  }



export default Home