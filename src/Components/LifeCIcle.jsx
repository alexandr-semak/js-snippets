import React, { Component } from "react";

class LifeCicle extends Component {
  constructor(props) {
    super(props);
    console.log("1 - constructor(state) LifeCicle");
    this.state = {
      arg: props.arg
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("2 - componentWillMount(deprecated)");
  }

  componentDidMount() {
    console.log("4 - componentDidMount (jquery, счетчик, сетевый запросы, работа с DOM)");
  }

  componentWillUnmount() {
    console.log(" - componentWillUnmount (плагины jQuery, clearInterval, удаляем Listeners)");
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log(" 5 - componentWillUpdate ");
  }

  render() {
    console.log("3 - render");
    return (
      <div>
        <h1>Жизненный цикл</h1>
      </div>
    );
  }
}

export default LifeCicle;
