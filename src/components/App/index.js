import React, { Component } from "react";
import Login from "../Login";
import RegisterPage from "../RegisterPage";

import "./App.css";

// const API = "http://localhost:5000";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
          <RegisterPage />
        </header>
      </div>
    );
  }
}

export default App;
