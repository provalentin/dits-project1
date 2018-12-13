import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import routes from './routes/routes'
import store from './store/store.js'


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                {routes.map(({path, exact, component})=>
                    <Route path = {path} exact = {exact} component = {component}/>
                )}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
