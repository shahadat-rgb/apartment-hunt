import React, { useContext, useEffect, useState } from "react";
import "./TopBar.css";
import logo from "../../../images/logos/Logo.png"
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import { handleSignOut } from "../Login/LoginManager";


const TopBar = () => {
  let count = 0;
  let admin = false;

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [adminList, setAdminList] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-everglades-57765.herokuapp.com/getAdmin")
      .then((res) => res.json())
      .then((data) => setAdminList(data));
  }, []);

  let history = useHistory();

  const handleLoggingButton = () => {
    if (loggedInUser.name || loggedInUser.email) {
      handleSignOut();
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  };

   // if logged in user is admin then show admin button
   if (loggedInUser){
    adminList.map((admin) => {
      if (admin.email === loggedInUser.email) {
        count++; 
      }
      return count;
    });
  }
  if (count > 0){
    admin = true;
  }
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light topBar">
        <img src={logo} alt=""/>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-3" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="/">
                Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="/">
                Concerns
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="/">
                Event
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="/">
                Contact
              </a>
            </li>
            <li class="nav-item mt-3">
              {loggedInUser.name}
            </li>
            

            <li class="nav-item">
              <Link className="nav-link" to="/login">
                <button onClick={handleLoggingButton} className="login-btn">
                  {loggedInUser.name || loggedInUser.email ? "Logout" : "Login"}
                </button>
              </Link>
            </li>
            
            <li>
              {loggedInUser && admin && (
                <Link className="nav-link" to="/admin">
                  <button type="button" className="login-btn mr-3">
                    Admin
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
