import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false
    };
  }

  handleClick = () => {
    this.setState(() => ({ openDialog: true }));
  };

  handleClose = () => {
    this.setState(() => ({ openDialog: false }));
  };

  // searchClick = () => {
  //   fetch("http://localhost:5000/")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(JSON.stringify(myJson));
  //     });
  // };

  render() {
    return (
      <div className="App">
        <div>
          <Button onClick={this.handleClick}>Add Employee</Button>
          <Dialog
            open={this.state.openDialog}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Employee Search</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Input the employee name and click search to find relevant
                employees
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="search"
                label="Search"
                type="search"
                fullWidth
              />
              <Button color="primary">Search</Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <div>Employee Name:</div>
          <button>Save</button>
          <button>View Edits</button>
          <button>Previous Scores</button>
          <button>Close</button>
          <div>
            <h2>Impact</h2>
            <h2>Potential Category</h2>
            <h2>Potential Score</h2>
          </div>
          <div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
          <div>
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
