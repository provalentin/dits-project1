import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom'
import App from '../../components/App'

const history = createBrowserHistory();

class Index extends Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route path='/' exact component = {App}>
              First component content
            </Route>
          </Switch>
        </Router>


    );
  }
}

export default Index;
