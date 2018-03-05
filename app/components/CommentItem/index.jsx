import React, { Component } from 'react';

import './style.less';

export default class CommentItem extends Component {
    render() {
        console.log('ddddds');
        
        const { username, star, comment } = this.props.source;
        console.log(this.props.source);
        return (
            <div>
                {
                    username
                }        
                {
                    star
                }
                {
                    comment
                }
            </div>
        );
    }
}
