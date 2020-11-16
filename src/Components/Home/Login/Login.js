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
  sendVerification,
} from "./LoginManager";

import "./Login.css";
import fb from "../../../image/logos/Group 2.png";
import google from "../../../image/logos/Group 573.png";

const Login = () => {
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
      <div className="login-form  ">
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: "orange" }} className="text-center mt-5">
            {newUser ? "Create an Account" : "User Login"}
          </h1>
          <div className="row d-flex justify-content-center align-items-center">
            {newUser && (
              <div className="form-group col-12 col-md-8">
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name "
                  required
                />
              </div>
            )}

            <div className="form-group col-12 col-md-8">
              <input
                onBlur={handleBlur}
                type="text"
                name="email"
                className="form-control"
                placeholder="Your  email Address "
                required
              />
            </div>
            <div className="form-group col-12 col-md-8">
              <input
                onBlur={handleBlur}
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password  "
                required
              />
            </div>
            {newUser && (
              <div className="form-group col-12 col-md-8">
                <input
                  onBlur={handleBlur}
                  type="password"
                  name="confirm"
                  className="form-control"
                  placeholder="Enter confirm password  "
                  required
                />
              </div>
            )}

            {!newUser && (
              <div className="from-group col-12 col-md-8 d-flex justify-content-between ">
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
                    onClick={() => user.email && sendVerification(user.email)}
                    style={{ color: "orange", cursor: "pointer" }}
                  >
                    Forget Password
                  </p>
                </div>
              </div>
            )}

            <div className="col-12 col-md-8  ">
              <button className="submit" type="submit">
                {newUser ? "Create an Account" : "Login"}
              </button>
            </div>
          </div>
        </form>

        <div className="">
          {newUser ? "Already have an account?" : "Don't have an account?"}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setNewUser(!newUser)}
            className="text-warning"
          >
            {newUser ? "Login" : " Create an account"}
          </span>
        </div>

        <p style={{ color: "red" }}>{user.error}</p>
        {user.success && (
          <p style={{ color: "green" }}>
            User {newUser ? "created" : "Logged In"} successfully
          </p>
        )}
        <hr />

        {/*   {user.isSignedIn ? (
            <button onClick={signOut}>Sign Out</button>
          ) : (
          
              
              <p className="btn btn-success" onClick={googleSignIn}>
               Continue With Google Sign In
            </p>
         
          )}
     
      
      <button   onClick={fbSignIn}>
          Continue With Facebook Sign In
        </button> */}
      </div>
      <div
        className="col-12 col-md-8"
        style={{ width: "500px", margin: "auto" }}
      >
        <p style={{ textAlign: "center" }}>---------- Or -----------</p>

        <div
          onClick={fbSignIn}
          style={{ cursor: "pointer" }}
          className="login-section"
        >
          <img
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
            src={fb}
            alt=""
          />
          <p>Continue with Facebook</p>
        </div>
        <div
          onClick={googleSignIn}
          style={{ cursor: "pointer" }}
          className="login-section"
        >
          <img
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
            src={google}
            alt=""
          />
          <p>Continue with Google</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
