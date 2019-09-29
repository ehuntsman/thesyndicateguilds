import React, { Component } from "react";
import { Link } from "react-router-dom";
// Import Auth0Context instead of useAuth0
import { Auth0Context } from "../../react-auth0-wrapper";
import Character from "../Character/Character.js";
import Guilds from "../Guilds/Guilds.js";
import Profile from "../Users/Profile.js";

import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      menuToggled: false,
      page: "character",
      user: {
        realName: "Syndi-Member",
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
        proficiencies: [<li>prof</li>]
      }
    };
    this.ToggleMenu = this.ToggleMenu.bind(this);
    this.ChangePage = this.ChangePage.bind(this);
  }
  //runs when the code starts
  componentDidMount() {
    //this.function();
  }
  //initialize functions here

  ToggleMenu() {
    this.setState({
      menuToggled: !this.state.menuToggled
    });
  }

  ChangePage(a) {
    if (typeof a == "string") {
      this.setState({
        page: a,
        menuToggled: false
      });
    } else {
      console.log("Invalid Input on ChangePage function");
    }
  }

  // Assign the context type to a static property
  static contextType = Auth0Context;
  render(): JSX.Element {
    // Destructure the values you need from this.context instead of useAuth0
    const { isAuthenticated, loginWithRedirect, logout } = this.context;
    const { user } = this.state;

    let currentPage;

    switch (this.state.page) {
      case "character":
        currentPage = <Character user={user} />;
        break;
      case "guilds":
        currentPage = <Guilds user={user} />;
        break;
      case "profile":
        currentPage = <Profile user={user} />;
        break;
      default:
        currentPage = <Character user={user} />;
        break;
    }

    return (
      <div className="body-container">
        <div className="bg-container"></div>
        <div className="home-container">
          <div
            className="page-header"
            onMouseLeave={() => this.setState({ menuToggled: false })}
          >
            <h1>The Syndicate Web</h1>
            <div className="log-section">
              <button onClick={() => loginWithRedirect({})}>Log in</button>
              <button onClick={() => logout()}>Log out</button>
            </div>
            <button className="menu-button" onClick={() => this.ToggleMenu()} />
            <div className={this.state.menuToggled ? "open-menu" : "hidden"}>
              <ul>
                <li>
                  <button onClick={() => this.ChangePage("character")}>
                    Character
                  </button>
                </li>
                <li>roles</li>
                <li>Login save user</li>
                <li>Log out redirect to homepage</li>
                <li>planes</li>
                <li>
                  <button onClick={() => this.ChangePage("guilds")}>
                    guilds
                  </button>
                </li>
                <li>
                  <button onClick={() => this.ChangePage("profile")}>
                    Profile
                  </button>
                </li>
                <li>
                  <button onClick={() => loginWithRedirect({})}>Login</button>
                </li>
              </ul>
            </div>
          </div>

          {currentPage}
        </div>
      </div>
    );
  }
}

export default Home;
