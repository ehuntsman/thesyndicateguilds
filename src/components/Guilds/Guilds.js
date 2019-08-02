import React, { Component } from 'react';
import axios from 'axios';

export default class Guilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guilds: []
    };
    this.getAllGuilds = this.getAllGuilds.bind(this);
  }

  componentDidMount(){
    this.getAllGuilds();
  }

  getAllGuilds() {
    const url = `http://localhost:3001/api/guilds`;
    axios.get(url).then(response => {
      this.setState({
        guilds: response.data
      });
    });
  }

  render() {
    console.log(this.state, "state is here")
    return (
      <div>
        <p>connect database</p>
      </div>
    )
  }
}
