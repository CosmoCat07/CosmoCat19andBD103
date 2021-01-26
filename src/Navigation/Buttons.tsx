import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface ButtonProps {
  data: string;
  link: string;
}
interface ButtonState {
  style: Object;
}

export default class NavButton extends Component<ButtonProps, ButtonState> {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        textDecoration: "none",
        color: "black",
        padding: "10px",
        background: "red"
      }
    };
  }
  onClick = () => {
    console.log("Hello World!");
  };
  render() {
    return (
      <div onClick={this.onClick}>
        <Router>
          <Link to="/about" style={this.state.style}>
            {this.props.data}
          </Link>
        </Router>
      </div>
    );
  }
}
