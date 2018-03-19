import React, { Component } from 'react';

import './style.less';

import SpaceBar from '../../components/SpaceBar';
import Header from '../../components/Header';
import OrderList from './subpage/OrderList';

export default class User extends Component {
    render () {
        return (
            <div>
                <Header title='用户主页'></Header>
                <div className='user-info'>
                    <i className='icon-user'></i>
                    <span className='current-city'>{'北京'}</span>
                </div>
                <SpaceBar options={{}}></SpaceBar>
                <OrderList></OrderList>
            </div>
        );
    }
}
