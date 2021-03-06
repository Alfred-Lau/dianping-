import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';
import Hello from '../containers/Hello';
import City from '../containers/City';
import SearchResult from '../components/SearchResult';
import UserCenter from '../containers/UserCenter';
import Login from '../containers/Login';

export default class SubRouter extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/detail/:id' component={Detail} />
                <Route path='/hello/:id' component={Hello} />
                <Route path='/city' component={City} />
                <Route path='/search/:keyword' component={SearchResult}></Route>
                <Route path='/user-center' component={UserCenter}></Route>
                <Route path='/login' component={Login}></Route>
                <Route component={NotFound} />
            </Switch>
        );
    }
}
