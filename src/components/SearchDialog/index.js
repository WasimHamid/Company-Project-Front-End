import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

class SearchDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      searchField: ""
    };
  }

  handleClick = () => {
    this.setState(() => ({ openDialog: true }));
  };

  handleClose = () => {
    this.setState(() => ({ openDialog: false }));
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      searchField: value
    }));
  };

  searchClick = () => {
    const search = this.state.searchField;
    fetch(`http://localhost:5000/employees/${search}`)
      .then(res => {
        return res.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  };

  render() {
    return (
      <>
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
              onChange={this.handleChange}
              margin="dense"
              id="search"
              label="Search"
              type="search"
              fullWidth
            />
            <Button color="primary" onClick={this.searchClick}>
              Search
            </Button>
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
      </>
    );
  }
}

export default SearchDialog;
