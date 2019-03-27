import React, { Component } from "react";

import SearchDialog from "../SearchDialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RadioSet from "../RadioSet";
import EditHistory from "../EditHistory";
import Login from "../Login";
import RegisterPage from "../RegisterPage";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      impact: [],
      potCat: [],
      potScore: [],
      managers: [],
      impactAve: 0,
      potCatAve: 0,
      potScoreAve: 0,
      sessionId: null,
      managerComments: "",
      successionPlan: "",
      loginPage: true,
      landingPage: false,
      sessionPage: false
    };
  }

  handleCommentChange = (event, key) => {
    const { value } = event.target;
    this.setState(() => ({
      [key]: value
    }));
  };

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

  calcAverage = () => {
    this.setState(() => ({
      impactAve: Math.ceil(
        this.state.impact.reduce((total, amount) => {
          total += amount;
          return total / this.state.impact.length;
        }, 0)
      ),
      potCatAve: Math.ceil(
        this.state.potCat.reduce((total, amount) => {
          total += amount;
          return total / this.state.potCat.length;
        }, 0)
      ),
      potScoreAve: Math.ceil(
        this.state.potScore.reduce((total, amount) => {
          total += amount;
          return total / this.state.potScore.length;
        }, 0)
      )
    }));
  };

  save = () => {
    if (this.state.sessionId) {
      // save to current session
    }
    fetch("http://localhost:5000/sessions", {
      method: "POST",
      body: JSON.stringify({
        sessionId: 598310,
        impact: this.state.impact,
        potentialCategory: this.state.potCat,
        potential: this.state.potScore,
        overallImpact: this.state.impactAve,
        overallPotentialCategory: this.state.potCatAve,
        overallPotential: this.state.potScoreAve,
        dateLastReviewed: "12/12/12",
        editHistory: [],
        userCreatedSession: new Date(),
        successionPlan: this.state.successionPlan,
        managerComments: this.state.managerComments,
        owner: "5c9b8c8edb6aa3191c9d8e2d"
      }),
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    })
      .then(res => res.json())
      // .then(response => console.log(response.payload.sessionId))
      .then(response =>
        this.setState(() => ({ sessionId: response.payload.sessionId }))
      )
      .catch(error => console.error("Error:", error));
  };

  render() {
    let potAveConversion = "";
    if (this.state.potCatAve === 1) {
      potAveConversion = "Team";
    } else if (this.state.potCatAve === 2) {
      potAveConversion = "Functional";
    } else if (this.state.potCatAve === 3) {
      potAveConversion = "Organisational";
    }

    return (
      <div className="App">
        {this.state.sessionPage ? (
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
                <Button onClick={this.save}>Save</Button>
                <EditHistory sessionId={this.state.sessionId} />
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
                      amount={3}
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
                  <p>{this.state.impactAve}</p>
                  <p>{potAveConversion}</p>
                  <p>{this.state.potScoreAve}</p>
                </div>
                <Button onClick={this.calcAverage}>Calculate Averages</Button>
                <div className="resultBox">
                  <div>Graph</div>
                  <div>Graph</div>
                  <div>Graph</div>
                </div>
              </div>
            </div>
            <div className="bottomBox">
              <div className="commentsBox">
                <TextField
                  id="standard-multiline-static"
                  label="Manager Comments"
                  multiline
                  rows="4"
                  onChange={event => {
                    this.handleCommentChange(event, "managerComments");
                  }}
                />
              </div>
              <div className="commentsBox">
                <TextField
                  id="standard-multiline-static"
                  label="Succession Plan"
                  multiline
                  rows="4"
                  onChange={event => {
                    this.handleCommentChange(event, "successionPlan");
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Login />
            <RegisterPage />
          </>
        )}
      </div>
    );
  }
}

export default App;
