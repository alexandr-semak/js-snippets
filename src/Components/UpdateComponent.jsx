import React, { Component } from "react";

class UpdateComponent extends Component {
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  render() {
    const { counter } = this.props;
    return <div>{counter}</div>;
  }
}

export default UpdateComponent;
