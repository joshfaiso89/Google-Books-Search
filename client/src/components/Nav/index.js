import React from "react";
import '../../../src/App.css';

function Nav() {

  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand">GOOGLE BOOKS</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Saved</a></li>
            <li class="active"><a href="#">Search</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
