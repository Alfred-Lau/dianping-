import React, { Component } from 'react';

import {Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';
import Hello from '../containers/Hello';
import City from '../containers/City';

export default class SubRouter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/detail' component={Detail} />
                <Route path='/hello/:id' component={Hello} />
                <Route path='/city' component={City} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}
