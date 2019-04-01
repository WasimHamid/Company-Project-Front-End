import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "../Login";
import RegisterPage from "../RegisterPage";
import Dashboard from "../Dashboard";

const API = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem("Token")),
      isLoading: false
    };
  }

  login = async fields => {
    try {
      this.setState({ isLoading: true });
      console.log("fetching");
      const data = await fetch(`${API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(fields)
      }).then(res => res.json());
      console.log(data);
      if (data.success) {
        localStorage.setItem("Token", data.token);
        this.setState(
          () => ({ isLoggedIn: true }),
          () => this.props.history.push("/")
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  logout = () => {
    localStorage.removeItem("Token");
    this.setState(() => ({
      isLoggedIn: false
    }));
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (
              <Login onLogin={this.login} isLoading={this.state.isLoading} />
            )}
          />
          <Route exact path="/register" render={() => <RegisterPage />} />
          <Route
            path="/"
            render={() => {
              if (!this.state.isLoggedIn) {
                return <Redirect to="/login" />;
              }
              return <Dashboard />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
