import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import logo from "../../images/logos/logo.png";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import GoogleButton from "react-google-button";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        const { displayName, email, photoURL } = result.user;
        const user = { name: displayName, email: email, img: photoURL };
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  return (
    <Container className="login-container">
      <div className="text-center">
        <img
          src={logo}
          alt=""
          className="img-fluid p-4"
          style={{ width: "250px" }}
        />
      </div>
      <div className="login-form d-flex flex-column align-items-center justify-content-center">
        <h4 className="font-weight-bold text-center p-3">Login</h4>
        <GoogleButton onClick={handleGoogleSignIn} />
        <small className="">Dont have an account? <span className="text-secondary"><u>Create an account</u></span></small>
      </div>
    </Container>
  );
};

export default Login;
