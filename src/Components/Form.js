import React, { Component, Fragment } from 'react';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

export default class Form extends Component {
  state = {
    name: '',
  };
  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <div className="form">
        <div className="container">
          <h2 className="form__logan">Hello, User</h2>
          <TextField
            className="form__input"
            floatingLabelText="What is Your name"
            onChange={this.handleChange}
          />
          <Link
            onClick={() => {
              this.props.updateData(this.state.name);
            }}
            className="form__button"
            to="/home"
          >
            <input
              disabled={this.state.name === '' ? true : false}
              className="form__button"
              type="submit"
              value="Sign in"
            />
          </Link>
        </div>
      </div>
    );
  }
}
