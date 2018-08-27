import React, { Component } from "react";
import UpdateComponent from "./UpdateComponent";

class LifeCicle extends Component {
  constructor(props) {
    super(props);
    console.log("1 - constructor(state) LifeCicle");
    this.state = {
      counter: 0
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("2 - componentWillMount(deprecated)");
  }

  componentDidMount() {
    console.log("4 - componentDidMount (jquery, счетчик, сетевый запросы, работа с DOM)");
    this.intervalId = setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 5000);
  }

  componentWillUnmount() {
    console.log(" - componentWillUnmount (плагины jQuery, clearInterval, удаляем Listeners)");
    clearInterval(this.intervalId);
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log(" 5 - componentWillUpdate ");
  }

  render() {
    console.log("3 - render");
    //const { counter } = this.state;
    return (
      <div>
        <h1>Жизненный цикл</h1>
        <UpdateComponent counter={this.state.counter} />
      </div>
    );
  }
}

export default LifeCicle;
