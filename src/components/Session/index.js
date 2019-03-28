import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchDialog from "../SearchDialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import RadioSet from "../RadioSet";
import EditHistory from "../EditHistory";
import AddManager from "../AddManager";

import css from "./Session.module.css";

class Session extends Component {
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
      empNumber: "",
      employeeInfo: [],
      openSearchDialog: false,
      openManDialog: false,
      searchedMan: ""
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

  handleSearchDialogOpen = () => {
    this.setState(() => ({ openSearchDialog: true }));
  };

  handleSearchOk = () => {
    this.setState(state => ({
      employeeInfo: [...state.employeeInfo.slice(0, 5), true],
      openSearchDialog: false
    }));
  };

  handleSearchDialogClose = () => {
    this.setState(() => ({ openSearchDialog: false }));
  };

  handleManDialogOpen = () => {
    this.setState(() => ({ openManDialog: true }));
  };

  handleManOk = name => {
    this.setState(state => ({
      managers: [...state.managers, name],
      impact: [...state.impact, null],
      potCat: [...state.potCat, null],
      potScore: [...state.potScore, null],
      openManDialog: false,
      searchedMan: ""
    }));
  };

  handleManClose = () => {
    this.setState(() => ({ openManDialog: false }));
  };

  handleSearchChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      empNumber: value
    }));
  };

  searchClick = () => {
    const search = this.state.empNumber;
    fetch(`http://localhost:5000/employees/${search}`)
      .then(res => {
        return res.json();
      })
      .then(data =>
        this.setState(() => ({
          employeeInfo: [
            `${data.payload.employee.firstName} ${
              data.payload.employee.lastName
            }`,
            data.payload.employee.staffNumber,
            data.payload.employee.department,
            data.payload.employee.manager,
            data.payload.employee._id,
            false
          ]
        }))
      );
  };

  managerSearchClick = () => {
    const search = this.state.empNumber;
    fetch(`http://localhost:5000/employees/${search}`)
      .then(res => {
        return res.json();
      })
      .then(data =>
        this.setState(() => ({
          searchedMan: `${data.payload.employee.firstName} ${
            data.payload.employee.lastName
          }`
        }))
      );
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
    fetch(`http://localhost:5000/sessions`, {
      method: "POST",
      body: JSON.stringify({
        sessionId: 328492,
        impact: this.state.impact,
        potentialCategory: this.state.potCat,
        potential: this.state.potScore,
        managers: this.state.managers,
        overallImpact: this.state.impactAve,
        overallPotentialCategory: this.state.potCatAve,
        overallPotential: this.state.potScoreAve,
        dateLastReviewed: "12/12/12",
        editHistory: [],
        userCreatedSession: new Date(),
        successionPlan: this.state.successionPlan,
        managerComments: this.state.managerComments,
        owner: this.state.employeeInfo[4]
      }),
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    })
      .then(res => res.json())
      // .then(response => console.log(response.payload.sessionId))
      // .then(response =>
      //   this.setState(() => ({ sessionId: response.payload.sessionId }))
      // )
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
      <div className={css.container}>
        <div className={css.topBox}>
          <div className={css.employeeBox}>
            {this.state.employeeInfo[5] ? (
              <>
                <p>Employee Name: {this.state.employeeInfo[0]}</p>
                <p>Employee Number: {this.state.employeeInfo[1]}</p>
                <p>Dept: {this.state.employeeInfo[2]}</p>
                <p>Manager: {this.state.employeeInfo[3]}</p>
              </>
            ) : (
              <SearchDialog
                onChange={this.handleSearchChange}
                onClick={this.searchClick}
                employeeInfo={this.state.employeeInfo}
                onOpen={this.handleSearchDialogOpen}
                onClose={this.handleSearchDialogClose}
                onOk={this.handleSearchOk}
                isOpen={this.state.openSearchDialog}
              />
            )}
          </div>
          <div className={css.buttonBox}>
            <Button variant="contained" onClick={this.save}>
              Save
            </Button>
            <br />
            <br />
            <Button variant="contained" sessionId={this.state.sessionId}>
              Edit Session
            </Button>
            <br />
            <br />

            <Button variant="contained">Previous Scores</Button>
            <Link to="/">
              <br />
              <br />

              <Button variant="contained">Close</Button>
            </Link>
          </div>
        </div>
        <div className={css.middleBox}>
          <div className={css.managerList}>
            {this.state.managers.map(manager => (
              <p>{manager}</p>
            ))}
          </div>
          <div className={css.scoreSection}>
            <div className={css.titleBox}>
              <h2>Impact</h2>
              <h2>Potential Category</h2>
              <h2>Potential Score</h2>
            </div>
            <div className={css.labels}>
              {" "}
              1 2 3 Team Functional Organisational 1 2 3 4 5
            </div>{" "}
            {this.state.managers.map((manager, idx) => (
              <div className={css.radioBox}>
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
                  variant="contained"
                  onClick={() => {
                    this.removeManager(idx);
                  }}
                >
                  x
                </button>
              </div>
            ))}
            <AddManager
              onChange={this.handleSearchChange}
              onClick={this.managerSearchClick}
              searchedMan={this.state.searchedMan}
              onOpen={this.handleManDialogOpen}
              onClose={this.handleManClose}
              onOk={() => this.handleManOk(this.state.searchedMan)}
              isOpen={this.state.openManDialog}
            />
            <div className={css.resultBox}>
              <p>{this.state.impactAve}</p>
              <p>{potAveConversion}</p>
              <p>{this.state.potScoreAve}</p>
            </div>
            <Button variant="contained" onClick={this.calcAverage}>
              Calculate Averages
            </Button>
            <div className={css.resultBox}>
              {/* <div>
                    <PieChart values={this.state.impact} />
                  </div>
                  <div>
                    <PieChart values={this.state.potCat} />
                  </div>
                  <div>
                    <PieChart values={this.state.potScore} />
                  </div> */}
            </div>
          </div>
        </div>
        <div className={css.bottomBox}>
          <div className={css.commentsBox}>
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
          <div className={css.commentsBox}>
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
    );
  }
}

export default Session;
