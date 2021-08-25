import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: prevState.isClicked + 1
    }));
  }

  render() {
    let className = 'hot-button';
    if (this.state.isClicked >= 3) {
      className = 'hot-button three';
    }
    if (this.state.isClicked >= 6) {
      className = 'hot-button six';
    }
    if (this.state.isClicked >= 9) {
      className = 'hot-button nine';
    }
    if (this.state.isClicked >= 12) {
      className = 'hot-button twelve';
    }
    if (this.state.isClicked >= 15) {
      className = 'hot-button fifteen';
    }
    if (this.state.isClicked >= 18) {
      className = 'hot-button eighteen';
    }
    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
