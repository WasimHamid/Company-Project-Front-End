import React, { Component } from "react";
import SearchField from "react-search-field";

import "./App.css";

const API = "http://localhost:5000";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionResponse: "",
      query: "",
      staff: []
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
      .then(res => {
        this.setState({
          staff: res.payload.employees
        });
      });
  };

  renderEmployee() {
    if (this.state.staff.map(member => <div>{member.staffNumber}</div>));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.callSession}>Start New Session</button>
          <SearchField
            placeholder="Search by Employee ID"
            // onChange={this.handleSearchChange}
            onSearchClick={
              this.state.staff.staffNumber ? this.renderEmployee() : ""
            }
            classNames="test-class"
          />
          {/* {this.state.staff.map(member => (
            <div>{member.staffNumber}</div>
          ))} */}
        </header>
      </div>
    );
  }
}

export default App;
