import React, { Component } from 'react';
import App from '../containers';
import { Router, Route, Link, Switch } from 'react-router-dom';

//TODO:  理解history的用法并实践
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

import SubRouter from './SubRouter';
export default class AppRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={customHistory}>
                <App>
                    <Route path='/' component={SubRouter} />
                </App>                  
            </Router>
        );
    }
}
