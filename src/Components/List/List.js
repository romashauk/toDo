import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import * as todoActions from '../Redux/actions';

class List extends Component {
  state = {
    value: '',
  };
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  itemChange = (id, value) => {
    const { dispatch } = this.props;
    dispatch(todoActions.editToDo(id, value));
  };
  TaskChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSolve = id => {
    const { dispatch } = this.props;
    dispatch(todoActions.ResolveToDO(id));
  };
  handleClick = e => {
    e.preventDefault();
    if (this.state.value === '') {
      alert('Please write smth');
      return;
    }
    const { value } = this.state;
    this.props.dispatch(todoActions.addToDo(value));

    this.setState({
      value: '',
    });
  };
  removeFromItem = id => {
    this.props.dispatch(todoActions.removeTodo(id));
  };
  render() {
    const { value } = this.state;
    const { todos } = this.props;
    return (
      <div className="workSpace__list">
        <h3 className="workSpace__title">
          {todos.length === 0 ? (
            <h3>Your plans</h3>
          ) : (
            <h3>{todos.length} To Do</h3>
          )}
        </h3>
        <form>
          <input
            value={value}
            onChange={this.handleChange}
            type="text"
            placeholder="new to do"
            className="workSpace__field"
          />
          <button
            type="submit"
            className="workSpace__button"
            onClick={this.handleClick}
          >
            {' '}
            Add
          </button>
        </form>
        <ul>
          {todos.map(item => (
            <ListItem
              id={item.id}
              title={item.title}
              remove={this.removeFromItem}
              key={item.id}
              onChange={this.itemChange}
              handleClick={this.handleSolve}
              solved={item.resolved}
            />
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(List);
