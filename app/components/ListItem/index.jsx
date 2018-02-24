import React, { Component } from 'react';

import './style.less';
export default class ListItem extends Component {
    render() {
        const src = require('../../static/img/3.png');
        const { title, img, subTitle, price, distance, mumber, id } = this.props.data;
        console.log(this.props);
        return (
            <div className='item-wrapper '>
                <img src={src} alt={title} className='item-img' />
                <div className="item-content ">
                    <h3 className='item-title'>{title}</h3>    
                    <p className='item-subTitle'>{subTitle}</p>
                    <span className="item-price">￥{price}</span>
                    <span className="item-distance">{distance}</span>
                    <span className="item-number">已售{mumber}</span>
                </div>
                
            </div>
        );
    }
}
