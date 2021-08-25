import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, isTicking: false };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.timerId = setInterval(
      () => this.tick(),
      1000);
    this.setState({ isTicking: true });
  }

  pauseTimer() {
    clearInterval(this.timerId);
    this.setState({ isTicking: false });
  }

  resetTimer() {
    if (!this.state.isTicking) {
      this.setState(prevState => ({
        isTicking: prevState.isTicking,
        time: 0
      }));
    }
  }

  tick() {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  }

  render() {
    let icon = null;
    let stateFunction = null;
    if (!this.state.isTicking) {
      icon = 'fas fa-play fa-2x';
      stateFunction = this.startTimer;
    } else {
      icon = 'fas fa-pause fa-2x';
      stateFunction = this.pauseTimer;
    }
    return (
      <div className='container'>
        <div className='watch-face' onClick={this.resetTimer}>
          <div className='time'>{this.state.time}</div>
        </div>
        <i className={icon} onClick={stateFunction}></i>
      </div>
    );
  }
}
