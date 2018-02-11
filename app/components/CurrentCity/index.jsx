import React, { Component } from 'react';

import './style.less';

export default class CurrentCity extends Component {
    render() {
        return (
            <div className='current-city'>
                <h1 className="current-text">{this.props.city}</h1>
            </div>
        );
    }
}
