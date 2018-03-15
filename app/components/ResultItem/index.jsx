import React, { Component } from 'react';

import './style.less';

import Star from '../Star';

export default class ResultItem extends Component {
    render () {
        const { distance, id, mumber, price, subTitle, title } = this.props.data;

        let img = require('../../static/img/3.png');
        return (
            <div className='item-wrapper'>
                <img src={img} alt='logo' style={{width: 80, height: 80}} />
                <div className='result-content'>
                    <div className='result-title'>
                        {title}
                    </div>
                    <div className='result-star-wrapper'>
                        <Star score={4.3} className='result-star'></Star>
                        <span className='result-price'>￥{price}/人</span>
                    </div>
                    <p className='result-sub-title'>
                        {subTitle}
                    </p>
                </div>
            </div>
        );
    }
}
