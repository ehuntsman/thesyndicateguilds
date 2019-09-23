import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { createPublicKey } from "crypto";

const AuthCheck = (props) => {
  const [allUsers, setUsers] = useState();
  const [oneUser, setUser] = useState("");

  const { loading, user } = useAuth0();

  // useEffect( () => {
  //   let exsist = false
  //   for(let i=0; i > props.allusers.length; i++){
  //     console.log(props.allusers[1], "this is the user", i)
  //     if(props.allusers[i].email == user.email){
  //       console.log(user, "stuffs")
  //       props.logged(user.email)
  //       exsist = true
  //     }
  //     if(props.allusers.length == i && exsist == true){
  //       console.log("doesn't")
  //       let emails = user.email
  //       axios.post('/api/all-users', {email: emails}).then(res => {
  //         console.log(res, "this is response")
  //       })
  //     }
  //   }
  //   props.allusers.map( (peep) => {
  //   })
  //   if(user && !exsist){
  //     console.log("doesn't")
  //     let emails = user.email
  //     axios.post('/api/all-users', {email: emails}).then(res => {
  //       console.log(res, "this is response")
  //     })
  //   }else{
  //     console.log("does")
  //   }
  // }, [])
  useEffect( () => {
    props.sendUpUser(user);
  })

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
      {/* <img src={user.picture} alt="Profile" /> */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <hr />
      <h1>All</h1>
    </div>
  );
};

export default AuthCheck;