import React from "react";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Styles from "../Login/Login.module.css";
import NewSession from "../NewSessions";

const API = "http://localhost:5000";

class Authed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem("Token")),
      email: "",
      password: "",
      isLoading: false
    };
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState(state => ({
      [name]: value
    }));
  };

  login = () => {
    fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState(() => ({ isLoggedIn: true, secret: "" }));
          localStorage.setItem("Token", data.token);
        }
      });
  };

  logout = () => {
    localStorage.removeItem("Token");
    this.setState(() => ({
      isLoggedIn: false,
      secret: ""
    }));
  };

  loadFunc = loudingFunction => {
    this.setState({ isLoading: true });
    try {
      loudingFunction();
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 900);
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? "Welcome Home" : "Santander Login"}
        {this.state.isLoading ? (
          <Loader type="ThreeDots" color="gold" height={80} width={80} />
        ) : this.state.isLoggedIn ? (
          <div>
            <Button
              className={Styles.button2}
              variant="contained"
              size="large"
              color="secondary"
              onClick={this.logout}
            >
              Logout
            </Button>
            <NewSession />
          </div>
        ) : (
          <div>
            <TextField
              margin="normal"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.email}
              name="email"
              type="email"
              label="email"
            />
            <TextField
              margin="normal"
              variant="outlined"
              onChange={this.onChange}
              value={this.state.password}
              name="password"
              // type="password"
              label="password"
            />
            <div>
              <Button
                className={Styles.button}
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => this.loadFunc(this.login)}
              >
                Login
              </Button>
              <Button
                className={Styles.button}
                variant="contained"
                color="primary"
                size="large"
              >
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Authed;
