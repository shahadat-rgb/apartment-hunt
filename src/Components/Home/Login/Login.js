import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  forgetPassword,
} from "./LoginManager";

import "./Login.css";
import fb from "../../../image/logos/Group 2.png";
import google from "../../../image/logos/Group 573.png";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));
const Login = () => {
  const classes = useStyles();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };
  return (
    <section>
      <div className="container">
        <div className="forms">
          <div className="inputs">
            <h3 style={{ color: "#000000" }} className="pt-2">
              {newUser ? "Create an Account" : "Login"}
            </h3>

            <div className="d-flex justify-content-center align-items-center">
              <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                {newUser && (
                  <TextField
                    onBlur={handleBlur}
                    type="text"
                    name="name"
                    id="standard-basic"
                    label="Your name"
                    required
                  />
                )}

                <TextField
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  id="standard-basic"
                  label="Your email address"
                  required
                />
                <TextField
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  id="standard-basic"
                  label="Enter Your password"
                  required
                />

                {newUser && (
                  <TextField
                    onBlur={handleBlur}
                    type="password"
                    name="confirm"
                    id="standard-basic"
                    label="Enter Your confirm password"
                    required
                  />
                )}

                {!newUser && (
                  <div className="from-group  d-flex justify-content-between ">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Remember Me
                      </label>
                    </div>
                    <div>
                      <p
                        onClick={() => forgetPassword(user.email)}
                        style={{ color: "orange", cursor: "pointer" }}
                      >
                        Forget Password
                      </p>
                    </div>
                  </div>
                )}

                <button className="submit" type="submit">
                  {newUser ? "Create an Account" : "Login"}
                </button>

               <span>
               {newUser
                  ? "Already have an account?"
                  : "Don't have an account?"}
               </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setNewUser(!newUser)}
                  className="text-login-create"
                >
                  {newUser ? "Login" : " Create an account"}
                </span>
              </form>
            </div>
          </div>

          <p style={{ color: "red" }}>{user.error}</p>
          {user.success && (
            <p style={{ color: "green" }}>
              User {newUser ? "created" : "Logged In"} successfully
            </p>
          )}

          <div className="mt-3">
            <div className="mt-3">
              <div className="row facebook" onClick={fbSignIn}>
                <div className="col-md-2 icon">
                  <img src={fb} alt="" />
                </div>
                <div className="col-md-10 ">
                  <h4>
                    <strong>Continue with facebook</strong>
                  </h4>
                </div>
              </div>
              <div className="row google" onClick={googleSignIn}>
                <div className="col-md-2 icon">
                  <img src={google} alt="" />
                </div>
                <div className="col-md-10">
                  <h4>
                    <strong>Continue with google</strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Login;
