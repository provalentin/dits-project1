import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import './index.css';
import routes from './routes/routes'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history} >
        <Switch>
            {routes.map( ({path, exact, component}) => <Route {...{path, exact, component}}  />)}
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
