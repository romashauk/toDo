import React, { Component, Fragment } from 'react';
import './style/App.scss';
import { Route, Switch } from 'react-router-dom';

import Form from './Components/SignIn/SignIn';
import WorkSpace from './Components/WorkSpace/WorkSpace';

import AppBar from 'material-ui/AppBar';

class App extends Component {
  state = {
    userName: '',
  };
  updateData = value => {
    this.setState({ userName: value });
  };
  render() {
    return (
      <Fragment>
        <AppBar
          className="header"
          showMenuIconButton={false}
          title={`Welcome to the Work Space`}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Form updateData={this.updateData} />}
          />
          <Route
            path="/home"
            render={() => <WorkSpace name={this.state.userName} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
