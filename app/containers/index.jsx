import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter} from 'react-router-dom';

//TODO:  理解history的用法并实践
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

// import { getData } from '../fetch/getData'

import * as userInfoActionsFromOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor (props, ctx) {
        super(props,ctx);
        this.state = {
            initDone:false
        };
    }

    componentDidMount () {
        let cityName = localStorage.getItem('cityname');
        if (!cityName) {
            cityName = '北京';
        }
        this.props.userInfoActions.update({
            cityName});
        this.setState({
            initDone:true
        });
        // localStorage.setItem('cityname',cityName);
    }
    render () {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <span>加载中</span>
                }
            </div>
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
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
