import React, { Component } from 'react'
import axios from "axios";

class NewUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      name: "",
      email: "",
      username: ""
    }
    this.getUserByEmail = this.getUserByEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.getUserByEmail(this.props.email);
  }

  getUserByEmail(email){
    const url = '/api/all-users'
    axios.get(url).then(response => {
      console.log(response,"response")
      if(response.data.length == 0){
        console.log("no user")
      }else{
        console.log("user exsists")
        let user = response.data
        this.setState({
          id: user.id,
          name: user.name,
          email: user.email
        })
      }
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitMe(e){
    if(this.state.new){
      const url = '/api/all-users'
      axios
        .post(url, this.state.id, this.state.name, this.state.email, this.state.username)
        .then(resp => setTimeout(this.setState({ redirect: true }), 200));
    }else{
      const url = `/api/user/${this.state.id}`
      axios
      .put(url, this.state.name, this.state.email, this.state.username)
      .then(resp => setTimeout(this.setState({ redirect: true }), 200));
    }
  }
  

  render () {
    console.log("users", this.state.users)
    return (
      <div>
        Edit user
        <label>
          Name
          <input
            value={this.state.name}
            type="text"
            name="name"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <label>
          Email
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <label>
          Character Name
          <input
            value={this.state.username}
            type="text"
            name="username"
            onChange={e => this.handleChange(e)}
          />
        </label>
        <button>Submit changes to User</button>
      </div>
    )
  }
}

export default NewUser