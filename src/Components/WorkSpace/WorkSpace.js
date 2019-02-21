import React, { Component } from 'react';
import List from '../List/List';

export default class WorkSpace extends Component {
  state = {
    hours: new Date().getHours(),
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
    show: false,
    animation: false,
  };
  greetings = () => {
    const { hours } = this.state;
    if (hours > 5 && hours < 12) {
      return 'Good morning';
    } else if (hours > 12 && hours < 18) {
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
  handleOver = e => {
    this.setState({
      animation: true,
    });
  };
  render() {
    const { hours, minute, second, show, animation } = this.state;
    return (
      <div className="workSpace" onMouseOver={this.handleOver}>
        <div className="container">
          <h1 className="workSpace__time">
            {hours < 10 ? 0 : null}
            {hours}:{minute < 10 ? 0 : null}
            {minute}:{second < 10 ? 0 : null}
            {second}
          </h1>
          <h2 className="workSpace__logan">
            {this.greetings()}, {this.props.name}
          </h2>
          <div className="animation-container">
            <div className={animation ? 'animation-on' : 'animation-off'} />
          </div>
          <button className="workSpace__show" onClick={this.showPlans}>
            {!show ? 'Show To Do' : 'Hide To Do'}
          </button>
          {show && <List />}
        </div>
      </div>
    );
  }
}
