import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchField from "react-search-field";
import Styles from "./NewSessions.module.css";

const API = "http://localhost:5000";

class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      staff: []
    };
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

  // renderEmployee() {
  //   if (this.state.staff.map(member => <div>{member.staffNumber}</div>));
  // }

  render() {
    return (
      <div classNames={Styles.topbox}>
        <div className="App">
          <header className="App-header">
            <h1 className={Styles.welcomeHeading}> Welcome </h1>
            <p class={Styles.font}>
              {" "}
              please start a new Talent Review Session or search for an Employee
              session by Employee Id
            </p>

            <Button
              className={Styles.searchButton}
              component={Link}
              to="/new"
              variant="contained"
              size="large"
              color="#FFFFFF"
            >
              Start New Session
            </Button>
            <br />

            <SearchField
              class={Styles.SearchField}
              placeholder="Search by Employee ID"
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
      </div>
    );
  }
}

export default NewSession;
