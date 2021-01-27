import React, { Component } from "react";

interface ButtonProps {
  data: string;
  link: string;
  width?: number;
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
        flexBasis: `${this.props.width}px`,
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
    console.log(this.state.style);
  }
  goToLink = () => {
    window.location.assign(this.props.link);
  };
  render() {
    return (
      <div style={this.state.style} onClick={this.goToLink}>
        {this.props.data}
      </div>
    );
  }
}
