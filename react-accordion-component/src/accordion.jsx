import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.id;
    const opened = this.state.opened;
    if (opened.includes(id)) {
      const index = opened.indexOf(id);
      opened.splice(index, 1);
      this.setState({ opened: opened });
    } else {
      this.setState(prevState => {
        const list = [...prevState.opened, id];
        return { opened: list };
      });
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
            {this.state.opened.includes(topic.id) &&
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
