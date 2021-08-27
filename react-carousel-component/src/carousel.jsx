import React from "react";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveId = this.moveId.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.moveRight(), 3000);
  }

  moveLeft() {
    clearInterval(this.timerID)
    this.timerID = setInterval(() => this.moveRight(), 3000);
    if (this.state.view <= 1) {
      this.setState({ view: this.props.imageList.length });
    } else {
      this.setState((prevState) => ({
        view: prevState.view - 1,
      }));
    }
  }

  moveRight() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 3000);
    if (this.state.view >= this.props.imageList.length) {
      this.setState({ view: 1 });
    } else {
      this.setState((prevState) => ({
        view: prevState.view + 1,
      }));
    }
  }

  moveId(e) {
  clearInterval(this.timerID);
  this.timerID = setInterval(() => this.moveRight(), 3000);
  const id = parseInt(e.target.id)
  this.setState({ view: id })
  }

  render() {
    const imageList = this.props.imageList;
    return (
        <div className="carousel">
          <i className="fas fa-angle-left fa-2x" onClick={this.moveLeft}></i>
          {imageList.map((image) => (
            <div key={image.id} className="image">
              {this.state.view === image.id && (
                <img src={image.url} alt={image.id} />
              )}
            </div>
          ))}
          <div className="progress-dot-container">
            {imageList.map((image) => (
              <div key={image.id} className="progress-dot">
                {this.state.view === image.id ? (
                  <i
                    id={image.id}
                    className="fas fa-circle"
                    onClick={this.moveId}
                  ></i>
                ) : (
                  <i
                    id={image.id}
                    className="far fa-circle"
                    onClick={this.moveId}
                  ></i>
                )}
              </div>
            ))}
          </div>
          <i className="fas fa-angle-right fa-2x" onClick={this.moveRight}></i>
        </div>
    );
  }
}
