import "./styles.css";
import React from "react";
import Navbar, { Button } from "./Navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var buttons: Button[] = [new Button("Home", ""), new Button("About", "about")];

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar content={buttons} />
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
