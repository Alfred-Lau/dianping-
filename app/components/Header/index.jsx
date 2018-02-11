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
                <h1>选择城市</h1>
            </div>
        );
    }
}
