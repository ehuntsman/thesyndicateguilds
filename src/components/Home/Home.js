import React, { Component } from "react";
import { Link } from "react-router-dom";
// Import Auth0Context instead of useAuth0
import { Auth0Context } from "../../react-auth0-wrapper";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {realName: "Syndi-Member",
      characterName: "Bolgona King",
      age: 26,
      race: "Anthousai",
      guild: "Scarlet Feast",
      skin: "gold",
      eyes: "red",
      hair: "green",
      height: "6ft 3in",
      weight: "90lbs",
      briefPersonality:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam tellus, bibendum eu faucibus a, euismod at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit nec arcu ut efficitur. Nunc pretium mauris mauris, in mollis mauris finibus nec. Aliquam id imperdiet augue. Praesent at eros et velit tempor iaculis at ac tellus. Vestibulum at velit malesuada, imperdiet quam sit amet, finibus sem. Quisque feugiat dui turpis, vel pharetra purus tempor et.",
      briefBackstory:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam tellus, bibendum eu faucibus a, euismod at ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit nec arcu ut efficitur. Nunc pretium mauris mauris, in mollis mauris finibus nec. Aliquam id imperdiet augue. Praesent at eros et velit tempor iaculis at ac tellus. Vestibulum at velit malesuada, imperdiet quam sit amet, finibus sem. Quisque feugiat dui turpis, vel pharetra purus tempor et.",
      totalFavor: 30,
      availFavor: 15,
      rasps: 20,
      level: 4,
      curHp: 14,
      curMp: 8,
      tempHp: 2,
      tempMp: 0,
      def: 16,
      atk: 4,
      defStance: "Earth",
      proficiencies: [<li>prof</li>]}
    };
  }
  //runs when the code starts
  componentDidMount() {
    //this.function();
  }
  //initialize functions here

  // Assign the context type to a static property
  static contextType = Auth0Context;
  render(): JSX.Element {
    // Destructure the values you need from this.context instead of useAuth0
    const { isAuthenticated, loginWithRedirect, logout } = this.context;
    const { user } = this.state
    return (
 
      <div className="body-container">
        <div className="bg-container"></div>
        <div className="home-container">
          <div className="page-header">
            <h1>The Syndicate Web</h1>
            <div className="log-section">
              <button onClick={() => loginWithRedirect({})}>Log in</button>
              <button onClick={() => logout()}>Log out</button>
            </div>
            <div className="menu-button"></div>
          </div>

          <div className="menu-container">
          <ul>
            <li>users</li>
            <li>roles</li>
            <li>Login save user</li>
            <li>Log out redirect to homepage</li>
            <li>planes</li>
            <Link to="/guilds">guilds</Link>
          </ul>
          <Link to='/guilds'>sections</Link>

            <Link to="/user/profile">Profile</Link>

            <Link to="/login">Login</Link>
          </div>
          <div className="main-body">
            <div className="info-container">
              <h2>Welcome {user.realName}!</h2>
              <ul>
                <li>Character: {user.characterName}</li>
                <li>Age: {user.age}</li>
                <li>Race: {user.race}</li>
                <li>Guild: {user.guild}</li>
              </ul>
              <button onClick="">Edit</button>
            </div>

            <div className="info-container">
              <h2>Appearance</h2>
              <ul>
                <li>Skin: {user.skin}</li>
                <li>Eyes: {user.eyes}</li>
                <li>Hair: {user.hair}</li>
                <li>Height: {user.height}</li>
                <li>Weight: {user.weight}</li>
              </ul>
              <button onClick="">Edit</button>
            </div>
            <div className="info-container">
              <h2>Personality</h2>
              <span>{user.briefPersonality}</span>
              <button onClick="">Edit</button>
            </div>
            <div className="info-container">
              <h2>Back Story</h2>
              <span>{user.briefBackstory}</span>
              <button onClick="">Edit</button>
            </div>
          </div>

          <div className="stats-container">
            <div className="info-container">
              <h2>Stats</h2>
              <ul>
                <li>Total Favor: {user.totalFavor}</li>
                <li>Available Favor: {user.availFavor}</li>
                <li>Rasps: {user.rasps}</li>
                <li>Level: {user.level}</li>
                <li>HP: {user.curHp}</li>
                <li>MP: {user.curMp}</li>
                <li>Temp HP: {user.tempHp}</li>
                <li>Temp MP: {user.tempMp}</li>
                <li>Defense: {user.def}</li>
                <li>Attack: {user.atk}</li>
                <li>Defualt Stance: {user.defStance}</li>
              </ul>
              <button onClick="">Spend</button>
            </div>
            <div className="info-container">
              <h2>Proficiencies</h2>
              <h3>skill_______________________prof</h3>
              <span>
                <ul>{user.proficiencies}</ul>
              </span>
              <button onClick="">Detail</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
