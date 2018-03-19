import React, { Component } from 'react';

import Header from '../../components/Header';

import './style.less';

export default class Login extends Component {
    render () {
        return (
            <div className='login-wrapper'>
                <Header title='登录'></Header>
                <div className='login-area'>
                    <div className="uname-area">
                        <i className="icon-phone"></i>
                        <input type="text" className="uname" placeholder='输入手机号'/>
                    </div>
                    <div className="upass-area">
                        <i className="icon-key"></i>
                        <input type="text" className="upass" placeholder='输入验证码'/>
                        <span className="code-text">发送验证码</span>
                    </div>
                    <input type='button' className='submit' value='登录' />
                </div>
            </div>
        );
    }
}
