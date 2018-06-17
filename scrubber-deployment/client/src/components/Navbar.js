import React from "react"

const Navbar = props =>
  <div className="navbar-fixed">
    <nav className="blue-grey darken-1">
      <div className="nav-wrapper">
      <a href="/" className="brand-logo orange-text text-lighten-1">New York Times Article Scrubber</a>
        <ul id="nav-mobile" className="right">
          <li><a className="orange-text text-lighten-2" href="/">Home</a></li>
          <li><a className="orange-text text-lighten-2" href="" onClick={props.handleSaveShow}>Saved</a></li>
        </ul>
      </div>
    </nav>
  </div>

export default Navbar
