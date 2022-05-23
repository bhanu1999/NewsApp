import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height:"60px",background:"#18182c"}}>
      <a className="navbar-brand" href="/"><img style={{height:"60px",width:"150px"}} src='capture.png' alt='logo replacement'></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">Home </a>
          </li>
          </ul>
        
      </div>
    </nav>
    )
  }
}

export default NavBar