import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    return <div className="App"> 
    <h3> login app </h3> 
    <div className="input-container">
      <label>username</label>
      <input type="text" placeholder="username"/>
    </div>
    <div className="input-container">
      <label>password</label>
      <input type="password" placeholder="password"/>
    </div>
    <div className="button-container">
      <button> login </button> <button> register </button>
    </div>
    </div>;
  }
}

export default App;
