import React, { Component } from 'react';

import './style.less';
export default class Search extends Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleSubmit(e) {
        if (e.keyCode !== 13) {
            return;
        }
        console.log(e);
        this.props.enterHandle(e.target.value);
    }
    render () {
        return (
            <input
                type='text'
                placeholder='请输入关键字'
                className='search-input'
                onKeyUp={this.handleSubmit.bind(this)}
            />
        );
    }
}
