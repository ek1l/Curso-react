import React, { Component } from "react";
import "./button.css";
const sayHello = () => {
  console.log("Hello world!");
};
class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={sayHello}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  label: "Clique aqui",
};

export default Button;
