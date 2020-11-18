import React from "react";
import "./TopBar.css";
import logo from "../../../images/logos/Logo.png"

const TopBar = () => {
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
            <button className="login-btn">Login</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
