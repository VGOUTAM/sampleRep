import React from 'react';
import '../App.css'
import Navbar from './Navbar'
// import { useState } from 'react';
// const axios = require("axios");
import axios from "axios";
// import { resolveComponentProps } from '@mui/base';

function Signup() {

  // const handleSignUp = () => {
  //   console.log("handlesignup");
  //   axios.post("https://backendhost-2auk.onrender.com/signup", {
  //     name: "sdkjd",
  //     uname: "chu",
  //     email: "sdas",
  //     contact: "2983192",
  //     password: "1234",
  //     gender: "male"
  //   }).then((res) => {
  //     console.log("sent", res);
  //   }).catch((err) => console.log(err));
  // };

  // const dummy = () => {
  //   console.log("dummy");
  //   axios.get("/check").then((res) => {
  //     console.log(res);
  //   }).catch((err) => console.log(err));
  // }
  // const [p, setp] = useState();
  // const [text, setText] = useState('');

  // function handleChange1(event){
  //   console.log(event)
  //   setp(event.target.value)
  // }

  // function handleChange2(event)
  // {
  //   if(p === event.target.value)
  //   setText ("Passwords do not match")
  // }
  
  return (

    <div className='bodyOfSignup' >
      <Navbar />
      <div class="signupContainer" >
      
      <div class="title">Registration</div>
      {/* <form action='/signup' method='POST'> */}
      <form action='https://backendhost-2auk.onrender.com/signup' method='POST'>
        <div class="user__details">
          <div class="input__box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your full name" name='fullname' required />
          </div>
          <div class="input__box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your user name" name='username' required />
          </div>
          <div class="input__box">
            <span class="details">Email</span>
            <input type="email" placeholder="Enter your email" name='email' required />
          </div>
          <div class="input__box">
            <span class="details">Phone Number</span>
            <input  placeholder="Enter your phone number" name='phnnumber' required />
          </div>
          <div class="input__box">
            <span class="details">Password</span>
            <input type="password" placeholder="********" name='passw' id='pwd' required />
          </div>
          <div class="input__box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="********" name="Cpassword" id='cpwd' required />
            {/* <span>{text}</span> */}
          </div>

        </div>
        <div class="gender__details">
          <input type="radio" name="gender" id="dot-1" value="male" />
          <input type="radio" name="gender" id="dot-2" value="female"/>
          <input type="radio" name="gender" id="dot-3" value="notSpecified"/>
          <span class="gender__title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span>Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span>Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <button class="button login__submit">
					<span class="button__text">Sign Up </span>
				</button>
        {/* <button class="button login__submit" onClick={dummy}>dummy</button> */}
      </form>
  </div>
  
</div>
    
  );
}

export default Signup;