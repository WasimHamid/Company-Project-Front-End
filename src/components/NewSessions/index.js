import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchField from "react-search-field";
import Styles from "./NewSession.module.css";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

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
      <div classNames={Styles.topbox}>
        <div className="App">
          <header className="App-header">
            <h1 className={Styles.welcomeHeading}> Welcome </h1>
            <p class={Styles.font}>
              {" "}
              Start a new Talent Review Session or load a previous one.
            </p>

            <Button
              className={Styles.searchButton}
              component={Link}
              to="/new"
              variant="contained"
              size="large"
              color="#FFFFFF"
            >
              Start New Session
            </Button>
            <br />

            <Button variant="contained" onClick={this.props.onOpen}>
          Load Previous Session
        </Button>
        <Dialog
          open={this.props.isOpen}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Session Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input the employee number and click search to find all sessions linked to an employee
            </DialogContentText>
            <TextField
              autoFocus
              onChange={this.props.onChange}
              margin="dense"
              id="search"
              label="Employee Number"
              type="search"
            />
            {this.props.sessionArr && this.props.sessionArr.map((session) => {
              return <li>{session.date} 
              <Link to={`/session/${session.id}`}><Button onClick={this.props.onClose}>Select</Button></Link>
              </li>
              }) 
            }
            <Button disabled={!this.props.empNumber} color="primary" onClick={this.props.onClick}>
              Search
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
          </header>
        </div>
      </div>
    );
  }
}

export default NewSession;
