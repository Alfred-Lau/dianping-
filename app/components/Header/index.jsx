import React, { Component } from 'react';

import './style.less';

export default class Header extends Component {
    clickHandle() {
        window.history.back();
    }
    render() {
        const { title } = this.props;
        
        return (
            <div id='common-header'>
                <i className='icon-chevron-left' onClick={this.clickHandle.bind(this)}></i>    
                <h1>{title}</h1>
            </div>
        );
    }
}
