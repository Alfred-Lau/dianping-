import React, { Component } from 'react';

import './style.less';

import Star from '../Star';

export default class CommentItem extends Component {
    render () {

        const { username, star, comment } = this.props.source;
        return (
            <div className='comment-wrapper'>
                <div className='username'>
                    <i className='icon-user' />
                    {username}
                </div>
                <div className='star-wrapper'>
                    <Star score={star}></Star>
                </div>
                <p className='comment'>
                    {comment}
                </p>
            </div>
        );
    }
}
