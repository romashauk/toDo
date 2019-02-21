import React, { Component } from 'react';
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
    const { name } = this.state;
    return (
      <div className="form">
        <div className="container">
          <h2 className="form__logan">Hello, User</h2>
          <form className="form__container">
            <TextField
              className="form__input"
              floatingLabelText="What is Your name"
              onChange={this.handleChange}
            />
            <Link
              onClick={() => {
                this.props.updateData(name);
              }}
              to="/home"
            >
              <button disabled={!name} className="form__button" type="submit">
                Sign in
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
