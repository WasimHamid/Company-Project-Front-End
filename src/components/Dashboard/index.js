import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import AddEmployees from "../AddEmployees";

import NewSessions from "../NewSessions";
import Session from "../Session";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      openSearchDialog: false,
      empNumber: "",
      sessionArr: [],
      selectedSession: {}
    };
  }

  handleSearchDialogOpen = () => {
    this.setState(() => ({
      openSearchDialog: true,
      sessionArr: [],
      empNumber: ""
    }));
  };

  handleSearchDialogClose = () => {
    this.setState(() => ({ openSearchDialog: false }));
  };

  handleSearchChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      empNumber: value
    }));
  };

  searchClick = () => {
    const search = this.state.empNumber;
    fetch(`http://localhost:5000/employees/${search}?sessions=true`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        let mappedArr = data.payload.sessionsHistory.map(obj => {
          return {
            id: obj.sessionId,
            date: new Date(obj.createdAt).toDateString()
          };
        });
        this.setState(() => ({
          sessionArr: mappedArr
        }));
      });
  };

  selectPrevSession = sessionId => {
    const searchSession = sessionId;
    fetch(`http://localhost:5000/sessions/${searchSession}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(() => ({
          selectedSession: data.payload.session
        }));
      });
  };

  logout = () => {
    localStorage.removeItem("Token");
    this.setState(() => ({
      isLoggedIn: false
    }));
  };

  render() {
    return (
      <div className="Dashboard">
        <Link to="/login">
          <Button variant="contained" size="large" onClick={this.logout}>
            Logout
          </Button>
        </Link>
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <NewSessions
                {...routerProps}
                onChange={this.handleSearchChange}
                onClick={this.searchClick}
                onOpen={this.handleSearchDialogOpen}
                onClose={this.handleSearchDialogClose}
                isOpen={this.state.openSearchDialog}
                sessionArr={this.state.sessionArr}
                empNumber={this.state.empNumber}
                sessionSelect={this.selectPrevSession}
              />
            )}
          />
          <Route exact path="/new" component={Session} />

          <Route exact path="/addemployees" render={() => <AddEmployees />} />

          <Route exact path="/session/:id" component={Session} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
