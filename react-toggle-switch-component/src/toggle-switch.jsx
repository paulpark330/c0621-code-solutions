import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    return (
      <div className="container" onClick={this.handleClick}>
        <button
          className={
            this.state.isClicked ? 'toggle-button-on' : 'toggle-button-off'
          }
        ></button>
        <div className={this.state.isClicked ? 'switch-on' : 'switch-off'}></div>
        <span className="toggle-status">
          {this.state.isClicked ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  }
}
