import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import NewSessions from "../NewSessions";
import Session from "../Session";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

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
          <Route exact path="/" component={NewSessions} />
          <Route exact path="/new" component={Session} />

          {/* <Route exact path="/session/:id" component={Session} /> */}
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
