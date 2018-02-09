import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './Home';
import Detail from './Detail';
import List from './List';
import NotFound from './404';
import Hello from './Hello';

import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor (props, ctx) {
        super();
    }

    componentDidMount() {
        let cityName = localStorage.getItem('cityname');
        if (!cityName) {
            cityName = 'Beijing';
        }
        this.props.userInfoActions.update({
            cityName
        });
    }
    render () {
        return (
            <Router>
                <div className='wrapper'>
                    <ul>
                        <li>
                            <Link to='/'> Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/list'> List
                            </Link>
                        </li>
                        <li>
                            <Link to='/detail'> Detail
                            </Link>
                        </li>
                        <li>
                            <Link to='/hello'> redux
                            </Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route path='/list' component={List} />
                        <Route path='/hello' component={Hello} />
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
