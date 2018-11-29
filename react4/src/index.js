import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import './index.css';
import App from './App';
import Page2 from './containers/Page2';
import Page3 from './containers/Page3';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history} >
        <Switch>
            <Route exact path={'/'} component={App}/>
            <Route path={'/page2'} component={Page2}/>
            <Route path={'/page3'} component={Page3}/>
        </Switch>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
