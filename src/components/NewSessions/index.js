import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchField from "react-search-field";

const API = "http://localhost:5000";

class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      staff: []
    };
  }

  handleSearchChange = () => {
    fetch(`${API}/employees`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          staff: res.payload.employees
        });
      });
  };

  // renderEmployee() {
  //   if (this.state.staff.map(member => <div>{member.staffNumber}</div>));
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/new">
            <Button>Start New Session</Button>
          </Link>
          <SearchField
            placeholder="Search by Employee ID"
            // onChange={this.handleSearchChange}
            onSearchClick={
              this.state.staff.staffNumber ? this.renderEmployee() : ""
            }
            classNames="test-class"
          />
          {/* {this.state.staff.map(member => (
            <div>{member.staffNumber}</div>
          ))} */}
        </header>
      </div>
    );
  }
}

export default NewSession;
