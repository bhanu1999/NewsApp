import React, { Component } from "react";
// import App from "../App.css"
// import a from "../index.css"
export class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "60px", background: "#18182c" }}
      >
        <a className="navbar-brand" href="/">
          <div  >
          <img
            
            style={{ height: "60px", width: "150px" }}
            src="capture.png"
            alt="logo replacement"
          ></img></div>
        </a>
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
            <li className="nav-item "><a className="nav-link" href="/">Home{" "}</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Business</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Entertainment</a></li>
            <li className="nav-item "><a className="nav-link" href="/">General</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Health</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Science</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Sports</a></li>
            <li className="nav-item "><a className="nav-link" href="/">Technology</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
