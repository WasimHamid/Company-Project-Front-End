import React, { Component } from "react";

import SearchDialog from "../SearchDialog";
import Button from "@material-ui/core/Button";
import RadioSet from "../RadioSet";
import PieChart from "../PieChart";

import "./App.css";

const API = "http://localhost:5000";

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
              <Button>Save</Button>
              <Button>View Edits</Button>
              <Button>Previous Scores</Button>
              <Button>Close</Button>
            </div>
          </div>
          <div className="middleBox">
            <div className="managerList">
              <Button>Add Manager</Button>
              <Button>Add Manager</Button>
              <Button>Add Manager</Button>
              <Button>Add Manager</Button>
              <Button>Add Manager</Button>
            </div>
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
              <div className="PieChart">
                <PieChart
                  values={[// TODO:  change these values so that it call them in from the database.
                    1,
                    2,
                    5,
                    5,
                    5,
                    3,
                    3,
                    2,
                    1,
                    1,
                    1,
                    5,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5
                  ]}
                />
                <PieChart values={[1, 5, 4, 4, 5, 5, 5, 5]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
