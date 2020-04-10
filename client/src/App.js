import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/search';
// import Saved from './pages/saved';
import Test from './pages/test';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={["/", "/search"]}>
          <Home />
        </Route>
        <Route exact path="/saved">
       <Test />
        </Route>
        <Route>
          {/* <NoMatch /> */}
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
