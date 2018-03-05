import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './style.less';
export default class ListItem extends Component {
    render() {
        const src = require('../../static/img/3.png');
        const { title, img, subTitle, price, distance, mumber, id } = this.props.data;
        return (
            <div className='item-wrapper '>
                <Link to={`/detail/${id}`}>
                    <img src={src} alt={title} className='item-img' />
                    <div className="item-content ">
                        <h3 className='item-title'>{title}</h3>
                        <p className='item-subTitle'>{subTitle}</p>
                        <span className="item-price">￥{price}</span>
                        <span className="item-distance">{distance}</span>
                        <span className="item-number">已售{mumber}</span>
                    </div>
                </Link>
            </div>
        );
    }
}
