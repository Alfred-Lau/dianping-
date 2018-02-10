import React, { Component } from 'react';

import './style.less';

export default class CurrentCity extends Component {
    render() {
        return (
            <div className='current-city'>
                <h1 className="current-text">当前城市是{this.props.city}</h1>
            </div>
        );
    }
}
