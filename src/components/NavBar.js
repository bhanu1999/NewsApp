import React from "react";
// import App from "../App.css"
// import a from "../index.css"
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Routes,
  Link,
} from "react-router-dom";
const NavBar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "60px", background: "#18182c" }}
    >
      <Link className="navbar-brand" to="/">
        <img
          style={{ height: "60px", width: "150px" }}
          src="capture.png"
          alt="logo replacement"
        ></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
