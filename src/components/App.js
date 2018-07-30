import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../css/App.css';
import '../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.PROFILE} component={() => <ProfilePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      </Router>
    );
  }
}

export default App;
