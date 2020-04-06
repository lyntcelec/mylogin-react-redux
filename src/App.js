import React from 'react'
import './App.css'
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from "./pages/Home/Home";
import Login from "./routes/Login/Login";
import history from './lib/history';

function App({user}) {
  var isAuthenticated = false
  const token = localStorage.getItem('token')

  if (token === null && user.AccessToken === false) {
    isAuthenticated = false
  } else {
    isAuthenticated = true
  }

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

  return (
    <div className="component-app">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <PrivateRoute path="/home" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App);