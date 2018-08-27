import React, { Component } from "react";
//import Test from "./Components/test";
import { CURRENT_YEAR } from "./config/config";
import XHR from "./Components/xhr";

class App extends Component {
  render() {
    return (
      <div className="App">
        {CURRENT_YEAR}
        <p>json server => json-server --watch db.json --port 3004</p>
        <XHR />
      </div>
    );
  }
}

export default App;
