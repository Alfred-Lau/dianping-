import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.less';
import Login from '../Login';
import User from '../User';

class UserCenter extends Component {

    render () {
        const user = this.props.user;
        const isLogin = Object.keys(user).length > 0 ? true : false;
        
        return (
            <div>
                {isLogin
                    ? <User></User>
                    : <Login />}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user || '' 
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
