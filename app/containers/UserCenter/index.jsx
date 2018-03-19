import React, { Component } from 'react';

import './style.less';
import Login from '../Login';
import User from '../User';

export default class UserCenter extends Component {

    render() {
        const user = 'code king';
        return (
            <div>
                {
                    user
                        ? <User></User>
                        : <Login />
                }
            
            </div>
        );
    }
}
