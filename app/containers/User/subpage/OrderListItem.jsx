import React, { Component } from 'react';

import './style.less';

export default class OrderListItem extends Component {
    render() {
        const img = require('../../../static/img/3.png');
        const { commentState, count, price, title } = this.props.data;

        return (
            <div className='order-list-item-wrapper'>
                <img src={img} alt='' style={{ width: 80, height: 80 }} />
                <div className='order-item'>
                    <p className='order-item-title'>
                        {title}
                    </p>
                    <p className='order-item-comment'>
                        {commentState}
                    </p>
                    <p className='order-item-price'>
                        {price}
                    </p>
                </div>
                <input type='text' className='changeSubmit' defaultValue='评价' />
            </div>
        );
    }
}
