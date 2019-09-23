import React, { Component } from 'react'
import axios from "axios";

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount(){
    this.getAllUsers();
  }

  getAllUsers(){
    const url = '/api/all-users'
    axios.get(url).then(response => {
      this.setState({
        users: response.data
      })
    })
  }
  render () {
    console.log("users", this.state.users)
    return (
      <div>
        all users
      </div>
    )
  }
}

export default Users