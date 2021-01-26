import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface ButtonProps {
  data: string;
  link: string;
  parentWidth?: number;
}
interface ButtonState {
  style: Object;
}

export default class NavButton extends Component<ButtonProps, ButtonState> {
  constructor(props) {
    super(props);
    // STYLE
    this.state = {
      style: {
        flexBasis: this.props.parentWidth,
        display: "inline-block",
        fontSize: "20px",
        lineHeight: "40px",
        marginLeft: 0,
        marginRight: 0,
        boxSizing: "border-box",
        color: "white",
        backgroundColor: "blue",
        border: "1px solid",
        textAlign: "center",
        textDecoration: "none"
      }
    };
  }
  render() {
    return (
      <Router>
        <Link to="/about" style={this.state.style} className="center">
          {this.props.data}
        </Link>
      </Router>
    );
  }
}
