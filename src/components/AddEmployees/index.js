import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const API = "http://localhost:5000";

class AddEmployees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      manager: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${API}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        staffNumber: this.state.staffNumber,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        department: this.state.department,
        manager: this.state.manager
      })
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      staffNumber,
      firstName,
      lastName,
      email,
      department,
      manager
    } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <TextField
            margin="normal"
            variant="outlined"
            id="number"
            value={staffNumber}
            placeholder="Enter staffNumber"
            name="staffNumber"
            onChange={this.onChange}
          />
          <br />

          <TextField
            margin="normal"
            variant="outlined"
            id="text"
            value={firstName}
            placeholder="Enter firstname"
            name="firstName"
            onChange={this.onChange}
          />
          <br />

          <TextField
            margin="normal"
            variant="outlined"
            id="secondname"
            value={lastName}
            placeholder="Enter lastname"
            name="lastName"
            onChange={this.onChange}
          />
          <br />

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
          <br />

          <TextField
            margin="normal"
            variant="outlined"
            value={department}
            id="department"
            placeholder="Enter department"
            name="department"
            onChange={this.onChange}
          />
          <br />

          <TextField
            margin="normal"
            variant="outlined"
            value={manager}
            placeholder="Enter manager"
            name="manager"
            onChange={this.onChange}
          />
          <br />

          <Button
            type="submit"
            variant="contained"
            size="medium"
            aria-label="Add"
          >
            Add Employee
          </Button>
        </form>
        <br />
        <Link to="/">
          <Button variant="contained">Return to Previous Page</Button>
        </Link>
      </>
    );
  }
}

export default AddEmployees;
