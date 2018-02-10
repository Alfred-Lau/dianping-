import React, { Component } from 'react';

import './style.less';
export default class Search extends Component {
    constructor(props, ctx) {
        super(props);
        this.state = {
            value:''
        };
    }
    render() {
        return (
            <input
                type="text"
                placeholder='请输入关键字'
                className='search-input'
                value={this.state.value}
            />
        );
    }
}
