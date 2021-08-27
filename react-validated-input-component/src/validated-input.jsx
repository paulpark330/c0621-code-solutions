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
    let isValid = false;
    let errorMessage = null;
    if (password === '') {
      isValid = false;
      errorMessage = 'A password is required.';
    } else if (password.length < 8) {
      isValid = false;
      errorMessage = 'Your password is too short.';
    } else if (password.length >= 8) {
      isValid = true;
      errorMessage = null;
    }
    this.setState({ value: event.target.value, validInput: isValid, errorMessage: errorMessage });
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
          <input
            className="password-input"
            type="password"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <i className={icon}></i>
        </div>
        <div className="error-message">
          <p>
            {errorMessage}
          </p>
        </div>
      </div>
    );
  }
}
