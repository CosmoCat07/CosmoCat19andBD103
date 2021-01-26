import React, { Component, RefObject } from "react";
import NavButton from "./Buttons";

export class Button {
  data: string;
  link: string;
  constructor(data: string, link: string) {
    this.data = data;
    this.link = link;
  }
}

export class Collection<T> extends Array<T> {
  content: Array<T>;
  children: number;
  constructor(...content: T[]) {
    super(...content);

    this.content = content;
    this.children = content.length;
  }
  /***
   * @override
   */
  push(newItem: T): number {
    this.content.push(newItem);
    this.children++;
    return this.children;
  }
}

interface NavbarProps {
  content: Button[];
}

interface NavbarState {
  btnAmount: number;
  key: string;
  style: Object;
  width?: number;
}

export default class Navbar extends Component<NavbarProps, NavbarState> {
  static index = 0;
  navbar: RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);

    this.navbar = React.createRef();

    this.state = {
      btnAmount: this.props.content.length,
      key: `Navbar${Navbar.index}`,
      style: {
        display: "flex",
        margin: 0,
        padding: 0,
        flexDirection: "row",
        justifyContent: "flex-start",
        border: "1px solid",
        height: "50px"
      }
    };

    Navbar.index++;
  }
  createContent = () => {
    var total = new Collection<unknown>();
    var index = 0;
    for (var btn of this.props.content) {
      total.push(
        <NavButton
          data={btn.data}
          link={btn.link}
          key={index}
          parentWidth={this.state.width}
        />
      );
    }
    return total;
  };
  componentDidMount() {
    this.setState({ width: this.navbar.current?.offsetWidth });
  }
  render() {
    return (
      <section key={this.state.key} ref={this.navbar} style={this.state.style}>
        {this.createContent().content}
      </section>
    );
  }
}
