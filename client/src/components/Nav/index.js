import React from "react";
import '../../../src/App.css';

function Nav() {

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a  href="#" className="navbar-brand">GOOGLE BOOKS</a>
          </div>
          <ul className="nav navbar-nav-inline">
            <li className="active"><a href="/saved" style={{marginRight: "30px", color: "white"}}>Saved</a></li>
            <li className="active"><a href="/" style={{color: "white"}}>Search</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
