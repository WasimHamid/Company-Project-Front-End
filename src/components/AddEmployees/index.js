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
      manager: "",
      accessLevel: "",
      dateLastReviewed: "",
      previousImpactScores: "",
      previousPotentialCategoryScores: "",
      previousPotentialScore: ""
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
        manager: this.state.manager,
        accessLevel: this.state.accessLevel,
        dateLastReviewed: this.state.dateLastReviewed,
        previousImpactScores: this.state.previousImpactScores,
        previousPotentialCategoryScores: this.state
          .previousPotentialCategoryScores,
        previousPotentialScore: this.state.previousPotentialScore
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
      manager,
      accessLevel,
      dateLastReviewed,
      previousImpactScores,
      previousPotentialCategoryScores,
      previousPotentialScore
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

          <TextField
            margin="normal"
            variant="outlined"
            id="text"
            value={firstName}
            placeholder="Enter firstname"
            name="firstName"
            onChange={this.onChange}
          />

          <TextField
            margin="normal"
            variant="outlined"
            id="secondname"
            value={lastName}
            placeholder="Enter lastname"
            name="lastName"
            onChange={this.onChange}
          />

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
            value={department}
            id="department"
            placeholder="Enter department"
            name="department"
            onChange={this.onChange}
          />

          <TextField
            margin="normal"
            variant="outlined"
            value={manager}
            placeholder="Enter manager"
            name="manager"
            onChange={this.onChange}
          />

          <TextField
            margin="normal"
            variant="outlined"
            value={accessLevel}
            placeholder="Enter accessLevel"
            name="accessLevel"
            onChange={this.onChange}
          />

          <TextField
            margin="normal"
            variant="outlined"
            value={dateLastReviewed}
            placeholder="Enter the date last Reviewed"
            name="dateLastReviewed"
            onChange={this.onChange}
          />
          <TextField
            margin="normal"
            variant="outlined"
            value={previousImpactScores}
            placeholder="previous Impact Score"
            name="previousImpactScores"
            onChange={this.onChange}
          />
          <TextField
            margin="normal"
            variant="outlined"
            value={previousPotentialScore}
            placeholder="Previous Potential Score"
            name="previousPotentialScore"
            onChange={this.onChange}
          />
          <TextField
            margin="normal"
            variant="outlined"
            value={previousPotentialCategoryScores}
            placeholder="Previous Potential Category Scores"
            name="previousPotentialCategoryScores"
            onChange={this.onChange}
          />
          <Button
            type="submit"
            variant="contained"
            size="medium"
            aria-label="Add"
          >
            Add Employee
          </Button>
        </form>
        <Link to="/">
          <Button variant="contained">Return to Previous Page</Button>
        </Link>
      </>
    );
  }
}

export default AddEmployees;
