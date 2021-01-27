import "./styles.css";
import React from "react";
import Navbar, { Button } from "./Navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

var buttons: Button[] = [
  new Button("Home", "/"),
  new Button("About", "/about")
];

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Navbar content={buttons} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
