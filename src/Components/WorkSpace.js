import React, { Component } from 'react';
import List from './List';

export default class WorkSpace extends Component {
  state = {
    hours: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    show: false,
  };
  greetings = () => {
    const { hours } = this.state;
    if (hours > 5 && hours < 11) {
      return 'Good morning';
    } else if (hours > 11 && hours < 19) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  tick = () => {
    this.setState({
      hours: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds(),
    });
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  showPlans = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { hours, minute, second, show } = this.state;
    return (
      <div className="workSpace">
        <div className="container">
          <h1 className="workSpace__time">
            {hours < '10' ? 0 : null}
            {hours}:{minute < '10' ? 0 : null}
            {minute}:{second < '10' ? 0 : null}
            {second}
          </h1>
          <h2 className="workSpace__logan">
            {this.greetings()}, {this.props.name}
          </h2>

          <List />
        </div>
      </div>
    );
  }
}
