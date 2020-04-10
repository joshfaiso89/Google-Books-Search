import React from "react";
import '../../../src/App.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand">GOOGLE BOOKS</Link>
          </div>
          <ul className="nav navbar-nav-inline">
            <li className="active"><Link to="/saved" style={{marginRight: "30px", color: "white"}}>Saved</Link></li>
            <li className="active"><Link to="/" style={{color: "white"}}>Search</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
