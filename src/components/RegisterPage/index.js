import React from "react";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";

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
      <div className="outside">
        <form onSubmit={this.handleSubmit}>
          <label>Register here:</label>
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

          <Fab
            type="submit"
            variant="extended"
            size="medium"
            color="primary"
            aria-label="Add"
          >
            Sign Up
          </Fab>
        </form>
      </div>
    );
  }
}
export default RegisterPage;
