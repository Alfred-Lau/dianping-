import React, { Component } from 'react';

import './style.less';

export default class Header extends Component {
    clickHandle() {
        window.history.back();
    }
    render() {
        return (
            <div id='common-header'>
                <i className='icon-chevron-left' onClick={this.clickHandle.bind(this)}></i>    
                <h1>地区选择</h1>
            </div>
        );
    }
}
