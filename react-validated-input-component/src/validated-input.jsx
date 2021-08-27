import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      validInput: false,
      errorMessage: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const password = event.target.value;
    const newState = {value: password}
    if (password === "") {
      newState.validInput = false;
      newState.errorMessage = "A password is required.";
    } else if (password.length < 8) {
      newState.validInput = false;
      newState.errorMessage = "Minumum 8 digits.";
    } else if (!password.match(/[0-9]/)) {
      newState.validInput = false;
      newState.errorMessage = "At least 1 number.";
    } else if (!password.match(/[A-Z]/)) {
      newState.validInput = false;
      newState.errorMessage = "At least 1 uppercase letter.";
    } else if (!password.match(/[!@#$%^&*()_+]/)) {
      newState.validInput = false;
      newState.errorMessage = "At least 1 special character.";
    } else {
      newState.validInput = true;
      newState.errorMessage = "";
    }
    this.setState(newState);
  }

  render() {
    let icon = null;
    let errorMessage = null;
    if (!this.state.validInput) {
      icon = 'fas fa-times fa-2x';
      errorMessage = this.state.errorMessage;
    } else {
      icon = 'fas fa-check fa-2x';
    }
    return (
      <div>
        <h1>Password</h1>
        <div className="container">
          <form>
            <input
              className="password-input"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
          <i className={icon}></i>
        </div>
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      </div>
    );
  }
}
