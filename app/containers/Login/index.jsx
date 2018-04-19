import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Header from '../../components/Header';

import * as actionsFromOtherFiles from '../../actions/user';

import { getValidation } from '../../fetch/Validate/user';


import './style.less';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = (e) => {
        e.preventDefault();
        getValidation(this.state).then(res=> res.text()).then(res => {
            console.log(res);
            if (Object.is(res, 'ok')) {
                this.props.useractions.update({
                    user:'sss'
                });                
            }
        });
        
    }
    handleChange = (e) => {
        const target = e.target;

        this.setState({
            [target.name]:target.value
        });
    }
    render () {
        return (
            <div className='login-wrapper'>
                <Header title='登录'></Header>
                <form className='login-area' onSubmit={this.handleClick}>
                    <div className='uname-area'>
                        <i className='icon-phone'></i>
                        <input name='uname' type='text' className='uname' placeholder='输入手机号' onChange={this.handleChange}/>
                    </div>
                    <div className='upass-area'>
                        <i className='icon-key'></i>
                        <input type='text' name='upass' className='upass' placeholder='输入验证码' onChange={this.handleChange}/>
                        <span className='code-text'>发送验证码</span>
                    </div>
                    <input type='submit' className='submit' value='登录'/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useractions: bindActionCreators(actionsFromOtherFiles, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
