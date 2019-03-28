import React from "react";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import RegisterPage from "../RegisterPage";

import Styles from "../Login/Login.module.css";

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
      <div>
        <h1>Santander Login</h1>
        {this.props.isLoading && (
          <Loader type="ThreeDots" color="gold" height={80} width={80} />
        )}
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
          <Button
            className={Styles.button}
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => this.props.onLogin(this.state)}
          >
            Login
          </Button>
        </div>

        <RegisterPage />
      </div>
    );
  }
}

export default Login;
