import React, { Component } from "react";
import axios from "axios";

class XHR extends Component {
  state = {
    clientsBase: []
  };

  componentDidMount() {
    //this.ajaxGet("http://localhost:3004/clients");

    axios.get("http://localhost:3004/clients").then(res => {
      const clientsBase = res.data;
      this.setState({ clientsBase });
    });
  }

  ajaxGet = url => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      console.log(request.readyState);

      if (request.readyState === 4 && request.status === 200) {
        //let phones = 	document.querySelector('#myIP').innerHTML =	request.responseText;
        console.log(request.responseText);
      }
    };

    request.open("GET", url);
    request.send();
  };

  render() {
    const uniqueId = `id${new Date().getTime()}`;
    return (
      <div>
        {this.state.clientsBase.map((person, i) => (
          <li id={uniqueId + person.general.firstName} key={uniqueId + person.general.firstName}>
            {person.general.firstName}
          </li>
        ))}
      </div>
    );
  }
}

export default XHR;
