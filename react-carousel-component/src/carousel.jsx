import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveId = this.moveId.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.moveRight(), 2000);
  }

  moveLeft() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2000);
    if (this.state.view <= 1) {
      this.setState({ view: this.props.imageList.length });
    } else {
      this.setState(prevState => ({
        view: prevState.view - 1
      }));
    }
  }

  moveRight() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2000);
    if (this.state.view >= this.props.imageList.length) {
      this.setState({ view: 1 });
    } else {
      this.setState(prevState => ({
        view: prevState.view + 1
      }));
    }
  }

  moveId(e) {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2000);
    const id = parseInt(e.target.id);
    this.setState({ view: id });
  }

  render() {
    const imageList = this.props.imageList;
    return (
        <div className="carousel">
          <i className="fas fa-angle-left fa-4x" onClick={this.moveLeft}></i>
          {imageList.map(image => {
            return (this.state.view === image.id && (
                <img key={image.id} className='image' src={image.url} alt={image.id} />
            ));
          })}
          <div className="progress-dot-container">
            {imageList.map(image => {
              return (this.state.view === image.id
                ? (<i id={image.id} key={image.id} className="fas fa-circle" onClick={this.moveId}></i>)
                : (<i id={image.id} key={image.id} className="far fa-circle" onClick={this.moveId}></i>)
              );
            })}
          </div>
          <i className="fas fa-angle-right fa-4x" onClick={this.moveRight}></i>
        </div>
    );
  }
}
