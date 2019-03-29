import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

class SearchDialog extends Component {
  render() {
    return (
      <>
        <Button variant="contained" onClick={this.props.onOpen}>
          Select Employee
        </Button>
        <Dialog
          open={this.props.isOpen}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Employee Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input the employee number and click search to find relevant
              employees
            </DialogContentText>
            <TextField
              autoFocus
              onChange={this.props.onChange}
              margin="dense"
              id="search"
              label="Employee Number"
              type="search"
            />
            <p>{this.props.employeeInfo[0]}</p>
            <Button disabled={!this.props.empNumber} color="primary" onClick={this.props.onClick}>
              Search
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
            <Button onClick={this.props.onOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default SearchDialog;
