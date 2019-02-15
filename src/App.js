import React, { Component, Fragment } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Auth from "./Auth";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  state = {};

  login = () => {
    auth.login();
  };

  logout = () => {
    auth.logout();
  };

  render() {
    return (
      <Fragment>
        <div>
          <Link to="/">NAVBAR</Link>
          <Link to="/home">Home</Link>
          <Link to="/other">Other</Link>
          <Link to="/bla bla bla">bla bla bla</Link>
          <button onClick={this.login}>Log In</button>

          <button onClick={this.logout}>Log Out</button>
        </div>
        <Switch>
          <Route exact path="/" render={() => <h1>M A I N</h1>} />
          <Route path="/home" render={() => <h1>H O M E</h1>} />
          <Route path="/other" render={() => <h1>O T H E R </h1>} />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <h1>LOADING..........</h1>;
            }}
          />
          <Redirect exact from="*" to="/" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
