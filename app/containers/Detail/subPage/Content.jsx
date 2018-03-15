import React, { Component } from 'react';

import Star from '../../../components/Star';

import './style.less';

let img = require('../../../static/img/3.png');

export default class Content extends Component {
    render() {
        const {title, subTitle,desc, star,price} = this.props.data;
        console.log(this.props.data);

        return (
            <div className='content-wrapper'>
                <img src={img} style={{width: 80, height: 80 }} alt="logo" />
                <div className="text-info">
                    <h3>
                        {title}
                    </h3>
                    <div className="star">
                        <Star score={star}></Star>                    
                    </div>
                    <span className="price">￥{price}/人</span>
                    <div className="sub-title">{subTitle}</div>


                </div>
                
            </div>
        );
    }
}
