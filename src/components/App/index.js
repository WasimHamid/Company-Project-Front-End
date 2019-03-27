import React, { Component } from "react";

import SearchDialog from "../SearchDialog";
import Button from "@material-ui/core/Button";
import RadioSet from "../RadioSet";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      impact: [],
      potCat: [],
      potScore: [],
      managers: []
    };
  }

  handleRadioChange = (event, scoreCat, arrPos) => {
    const { value } = event.target;
    this.setState(state => ({
      [scoreCat]: [
        ...state[scoreCat].slice(0, arrPos),
        parseInt(value),
        ...state[scoreCat].slice(arrPos + 1)
      ]
    }));
  };

  addManager = toAdd => {
    this.setState(state => ({
      managers: [...state.managers, toAdd],
      impact: [...state.impact, null],
      potCat: [...state.potCat, null],
      potScore: [...state.potScore, null]
    }));
  };

  removeManager = idx => {
    this.setState(state => ({
      managers: [
        ...state.managers.slice(0, idx),
        ...state.managers.slice(idx + 1)
      ],
      impact: [...state.impact.slice(0, idx), ...state.impact.slice(idx + 1)],
      potCat: [...state.potCat.slice(0, idx), ...state.potCat.slice(idx + 1)],
      potScore: [
        ...state.potScore.slice(0, idx),
        ...state.potScore.slice(idx + 1)
      ]
    }));
  };

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
              <Button>Save</Button>
              <Button>View Edits</Button>
              <Button>Previous Scores</Button>
              <Button>Close</Button>
            </div>
          </div>
          <div className="middleBox">
            <div className="managerList">
              {this.state.managers.map(manager => (
                <p>{manager}</p>
              ))}
            </div>
            <div className="scoreSection">
              <div className="titleBox">
                <h2>Impact</h2>
                <h2>Potential Category</h2>
                <h2>Potential Score</h2>
              </div>
              {this.state.managers.map((manager, idx) => (
                <div className="radioBox">
                  <RadioSet
                    amount={5}
                    onSelect={event =>
                      this.handleRadioChange(event, "impact", idx)
                    }
                    checked={this.state.impact[idx]}
                  />
                  <RadioSet
                    amount={3}
                    onSelect={event =>
                      this.handleRadioChange(event, "potCat", idx)
                    }
                    checked={this.state.potCat[idx]}
                  />
                  <RadioSet
                    amount={5}
                    onSelect={event =>
                      this.handleRadioChange(event, "potScore", idx)
                    }
                    checked={this.state.potScore[idx]}
                  />
                  <button
                    onClick={() => {
                      this.removeManager(idx);
                    }}
                  >
                    x
                  </button>
                </div>
              ))}
              <Button
                onClick={() => {
                  this.addManager("John Smith");
                }}
              >
                Add Manager
              </Button>
              <div className="resultBox">
                <p>3</p>
                <p>Team</p>
                <p>3</p>
              </div>
              <div className="resultBox">
                <div>Graph</div>
                <div>Graph</div>
                <div>Graph</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
