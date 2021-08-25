import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
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
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Thanks!' : this.props.text}
      </button>
    );
  }
}

const element = (
  <div>
    <CustomButton text="Please"/>
    <CustomButton text="Don't"/>
    <CustomButton text="Click"/>
  </div>
);

ReactDOM.render(element, document.querySelector('#root'));
