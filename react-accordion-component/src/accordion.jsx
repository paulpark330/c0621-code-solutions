import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    if (this.state.opened === id) {
      this.setState({ opened: null });
    } else {
      this.setState({ opened: id });
    }
  }

  render() {
    const data = this.props.data;

    return (
      <div className="accordion">
        {data.map(topic => (
          <div className="topic" key={topic.id} onClick={this.handleClick}>
            <div id={topic.id} className="subject">
              {topic.subject}
            </div>
            {this.state.opened === topic.id &&
            <div className='details'>
              {topic.details}
            </div>
            }
          </div>
        ))}
      </div>
    );
  }
}
