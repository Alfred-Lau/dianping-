import React, { Component } from 'react';

let img = require('../../static/img/2.png');

import './style.less';

export default class HomeAd extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='home-ad-wrapper clearfix'>
                <h3>超值特惠</h3>
                <div className="content">
                    {
                        this.props.data.map((item,index) => {
                            return (
                                <div key={index} className='home-ad-item float-left'>
                                    <a href={item.link}>
                                        <img src={img} alt={item.title}/>
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
