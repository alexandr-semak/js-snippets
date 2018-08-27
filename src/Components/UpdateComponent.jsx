import React, { Component } from "react";

class UpdateComponent extends Component {
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate (должен возвращать true или false)");
    return true;
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        {counter}
        <button onClick={this.props.ClearCounter}>ClearCounter</button>
      </div>
    );
  }
}

export default UpdateComponent;
