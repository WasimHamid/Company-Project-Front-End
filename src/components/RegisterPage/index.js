import React from "react";

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: data
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          id="name"
          placeholder="Enter First Name"
          name="firstname"
          type="text"
        />

        <label htmlFor="email">Email:</label>
        <input id="email" placeholder="Enter Email" name="email" type="email" />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          placeholder="Enter Password"
          name="password"
          type="password"
        />

        <button>Send data!</button>
      </form>
    );
  }
}
export default RegisterPage;
