import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  render() {
    return <button class="btn">{this.props.label}</button>;
  }
}

Button.defaultProps = {
  label: "Clique aqui",
};

export default Button;
