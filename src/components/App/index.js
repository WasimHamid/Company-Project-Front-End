import React, { Component } from "react";
import SearchField from "react-search-field";

import "./App.css";

const API = "http://localhost:5000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionResponse: "",
      query: ""
    };
  }

  callSessionAPI() {
    fetch(`${API}/session`)
      .then(res => res.text())
      .then(res => this.setState({ sessionResponse: res }));
  }

  handleSearchChange = () => {
    fetch(`${API}/employees`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          query: this.state.staffNumber
        })
      );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.callSession}>Start New Session</button>
          <SearchField
            placeholder="Search by Employee ID"
            onChange={this.handleSearchChange}
            classNames="test-class"
          />
        </header>
      </div>
    );
  }
}

export default App;
