import React, { Component } from "react";

import SearchDialog from "../SearchDialog";
import RadioSet from "../RadioSet";

import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="topBox">
            <div className="employeeBox">
              <SearchDialog />
              <p>Employee Name:</p>
              <p>Employee Number:</p>
              <p>Dept:</p>
              <p>Manager:</p>
            </div>
            <div className="buttonBox">
              <button>Save</button>
              <button>View Edits</button>
              <button>Previous Scores</button>
              <button>Close</button>
            </div>
          </div>
          <div className="middleBox">
            <div className="managerList" />
            <div className="scoreSection">
              <div className="titleBox">
                <h2>Impact</h2>
                <h2>Potential Category</h2>
                <h2>Potential Score</h2>
              </div>
              <div className="radioBox">
                <RadioSet amount="5" />
                <RadioSet amount="3" />
                <RadioSet amount="5" />
              </div>
              <div className="radioBox">
                <RadioSet amount="5" />
                <RadioSet amount="3" />
                <RadioSet amount="5" />
              </div>
              <div className="radioBox">
                <RadioSet amount="5" />
                <RadioSet amount="3" />
                <RadioSet amount="5" />
              </div>
              <div className="radioBox">
                <RadioSet amount="5" />
                <RadioSet amount="3" />
                <RadioSet amount="5" />
              </div>
              <div className="radioBox">
                <RadioSet amount="5" />
                <RadioSet amount="3" />
                <RadioSet amount="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
