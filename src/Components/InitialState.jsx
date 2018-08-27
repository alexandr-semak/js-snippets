import React, { Component } from "react";

class InitialState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arg: props.arg
    };
  }

  state = {
    arg: this.props.arg
  };

  getInitialState() {
    return { arg: this.props.arg };
  }

  render() {
    return (
      <div>
        <h2>Инициализация state</h2>
      </div>
    );
  }
}

export default InitialState;
