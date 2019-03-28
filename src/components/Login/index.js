import React from "react";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import css from "./Login.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = event => {
    const { value, name } = event.target;
    this.setState(state => ({
      [name]: value
    }));
  };

  render() {
    return (
      <div className={css.logo}>
        {/* <img src=" /> */}

        <h1 className={css.header}>Talent Review System</h1>

        <br />

        <h3 className={css.smallHeader}>Enter Your Login Details Here</h3>

        <div className={css.loader}>
          {this.props.isLoading && (
            <Loader type="ThreeDots" color="#DEECF1" height={80} width={80} />
          )}
        </div>
        <br />
        <div className={css.formContainer}>
          <TextField
            // margin="normal"
            variant="outlined"
            onChange={this.onChange}
            value={this.state.email}
            name="email"
            type="email"
            label="email"
            placeholder="Enter your email address"
            className={css.emailInput}
          />
          <br />
          <TextField
            // margin="normal"
            variant="outlined"
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            type="password"
            label="password"
            placeholder="Enter your password"
            className={css.passwordInput}
          />
          <br />
          <Button
            className={css.button}
            variant="contained"
            // color="secondary"
            // size="large"
            onClick={() => this.props.onLogin(this.state)}
            // component={Link}
            // to="/new"
          >
            Login
          </Button>
          <br />
          <Link to="/register">
            <Button className={css.button} variant="contained" size="large">
              Register
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
