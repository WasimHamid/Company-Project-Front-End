import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NewSessions from "../NewSessions";
import Session from "../Session";

import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
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
