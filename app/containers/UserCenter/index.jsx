import React, { Component } from 'react';

import './style.less';
import Login from '../Login';

export default class UserCenter extends Component {

    render() {
        const user = '';
        return (
            <div>
                {
                    user
                        ? 'user center'
                        : <Login />
                }
            
            </div>
        );
    }
}
