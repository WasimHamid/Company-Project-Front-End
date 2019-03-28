import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import css from "./RegisterPage.module.css";

const API = "http://localhost:5000";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1 className={css.header}>Register</h1>
        <br />

        <h3 className={css.smallHeader}>Enter Your Details Here To Register</h3>
        <div className={css.formContainer}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              margin="normal"
              variant="outlined"
              id="email"
              value={email}
              placeholder="Enter Email"
              name="email"
              type="email"
              onChange={this.onChange}
            />
            <TextField
              margin="normal"
              variant="outlined"
              id="password"
              value={password}
              placeholder="Enter Password"
              name="password"
              type="password"
              onChange={this.onChange}
            />

            <Button
              type="submit"
              variant="contained"
              size="medium"
              aria-label="Add"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </>
    );
  }
}
export default RegisterPage;
