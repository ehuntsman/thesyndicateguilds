import React, { useState, Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import NewUser from "./NewUser";
import { Redirect } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-wrapper";
import AuthCheck from './AuthCheck';
import {setUser} from '../../ducks/reducer';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new: true,
      users: [],
      user: [],
      toggled: false
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.sendUpUser = this.sendUpUser.bind(this);
    this.checkIfUserExists = this.checkIfUserExists.bind();
  }
  componentDidMount(){
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get('/api/all-users')
    .then((response) => {
      this.setState({
        users: response.data,
      })
      this.checkIfUserExists();
    })
    .catch((error) => {
        console.error("Can't get users", error)
    })
  }

  sendUpUser(user){
    if(this.state.user !== user){
      this.setState({
        user: user
      })
    }
  }

  checkIfUserExists(){
    this.state.users.map( (user) => {
      console.log("user exsists fired", user)
      if(user.email === this.state.user.email){
        this.setState({
          new: false
        })
      }
    })
  }

  toggleMe(){
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    let cake = "standard"
    if(this.state.toggled){
      let cake = "toggled-class"
    }
    return (
      <div className={this.state.toggled ? "toggled-class" : "standard"}>
        <AuthCheck logged={this.props.setUser} sendUpUser={this.sendUpUser}/>
        {this.state.new ? "new user or no user" : "old user "}
        basically, this will check if user exsists
        if not, create it
        if so, redirect to profile
        <bitton onClick={(() => this.toggleMe())}
        {this.state.users.map( (user) => {
          return(
            <div>{user.email}</div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
      currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {setUser})(Profile);