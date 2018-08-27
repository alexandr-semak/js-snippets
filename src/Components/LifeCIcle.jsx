import React, { Component } from "react";

class LifeCicle extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCicle constructor");
    this.state = {
      arg: props.arg
    };
  }

  render() {
    return <div>Жизненный цикл</div>;
  }
}

export default LifeCicle;
