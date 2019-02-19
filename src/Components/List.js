import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import CloseButton from 'material-ui/svg-icons/navigation/close';

export default class List extends Component {
  state = {
    counter: 0,
    value: '',
    items: [],
  };
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleClick = () => {
    if (this.state.value === '') {
      alert('Please write smth');
      return;
    }
    let { items, value, counter } = this.state;
    this.setState({
      counter: this.state.counter + 1,
      value: '',
      items: [
        ...items,
        {
          id: counter,
          title: value,
          value: '',
        },
      ],
    });
  };
  removeFromItem = id => {
    const { items } = this.state;
    const newItems = items.filter(p => p.id !== id);
    this.setState({
      items: newItems,
    });
  };
  render() {
    const { items } = this.state;
    return (
      <div className="workSpace__list">
        <h3 className="workSpace__title">
          {items.length === 0 ? (
            <h3>Your plans</h3>
          ) : (
            <h3>{items.length} To Do</h3>
          )}
        </h3>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          placeholder="new to do"
          className="workSpace__field"
        />
        <button className="workSpace__button" onClick={this.handleClick}>
          {' '}
          Add
        </button>
        <ul>
          {this.state.items.map(item => (
            <div className="items__container">
              <li className="workSpace__item" key={item.id} id={item.id}>
                {item.title}
                <CloseButton
                  className="list__btn"
                  onClick={() => this.removeFromItem(item.id)}
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
