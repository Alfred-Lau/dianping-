import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './Home';
import Detail from './Detail';
import List from './List';
import NotFound from './404';
import Hello from './Hello';
import City from './City';

//TODO:  理解history的用法并实践
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

// import { getData } from '../fetch/getData'

import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor (props, ctx) {
        super();
        console.log(__DEV__,__TEST__);
    }

    componentDidMount () {
        let cityName = localStorage.getItem('cityname');
        if (!cityName) {
            cityName = '北京';
        }
        this.props.userInfoActions.update({
            cityName});
    }
    render () {
        return (
            <Router history={customHistory}>
                <div className='wrapper'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route path='/list' component={List} />
                        <Route path='/hello/:id' component={Hello} />
                        <Route path='/city' component={City} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps (state) {
    return {
    };
}

function mapDispatchToProps (dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
