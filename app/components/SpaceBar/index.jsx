import React, { Component } from 'react';

import './style.less';

export default class SpaceBar extends Component {
    render() {
        const { title } = this.props.options;
        return (
            <div className={
                title
                    ?'space-bar-with-title'
                    : 'space-bar-without-title'}
            >
                {title}    
            </div>
        );
    }
}
