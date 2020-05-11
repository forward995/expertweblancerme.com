import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './history'

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
// import { PrivateRoute } from './components';
import { RegisterPage } from './RegisterPage';

function App() {
  return (    
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
