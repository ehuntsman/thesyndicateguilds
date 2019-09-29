import React, { Component } from "react";
import { type } from "os";

export default class Guilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false,
      overlayName: null
    };
    this.OpenOverlay = this.OpenOverlay.bind(this);
  }
  componentDidMount() {}

  OpenOverlay(a) {
    if (typeof a == "string") {
      this.setState({ overlayVisible: true, overlayName: a });
    } else {
      console.log("invalid input for OpenOverlay function");
    }
  }

  render() {
    const user = this.props.user;

    let currentOverlay;

    switch (this.state.overlayName) {
      case "basicInfo":
      case "appearance":
      case "personality":
      case "backstory":
      case "favor":
      case "proficiencies":
    }

    return (
      <div>
        <div className="main-body">
          <div className="info-container">
            <h2>Welcome {user.realName}!</h2>
            <ul>
              <li>Character: {user.characterName}</li>
              <li>Age: {user.age}</li>
              <li>Race: {user.race}</li>
              <li>Guild: {user.guild}</li>
            </ul>
            <button onClick={() => this.OpenOverlay("basicInfo")}>Edit</button>
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
            <button onClick={() => this.OpenOverlay("appearance")}>Edit</button>
          </div>
          <div className="info-container">
            <h2>Personality</h2>
            <span>{user.briefPersonality}</span>
            <button onClick={() => this.OpenOverlay("personality")}>
              Edit
            </button>
          </div>
          <div className="info-container">
            <h2>Back Story</h2>
            <span>{user.briefBackstory}</span>
            <button onClick={() => this.OpenOverlay("backstory")}>Edit</button>
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
            <button onClick={() => this.OpenOverlay("favor")}>Spend</button>
          </div>
          <div className="info-container">
            <h2>Proficiencies</h2>
            <h3>skill_______________________prof</h3>
            <span>
              <ul>{user.proficiencies}</ul>
            </span>
            <button onClick={() => this.OpenOverlay("Proficiencies")}>
              Detail
            </button>
          </div>
        </div>
        <div className={this.state.overlayVisible ? "overlayBG" : "hidden"}>
          <div className={this.state.overlayVisible ? "overlay" : "hidden"}>
            {currentOverlay}
          </div>
        </div>
      </div>
    );
  }
}
