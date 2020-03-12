import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { PrivateRoute } from './components';
import { RegisterPage } from './RegisterPage';

const history = createBrowserHistory();

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Redirect from="*" to="/"/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
