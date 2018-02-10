import React, { Component } from 'react';

import './style.less';

export default class CityList extends Component {
    constructor(props, ctx) {
        super(props);
    }
    handleClick(cityname) {
        const fn = this.props.fn;
        fn(cityname);
    }
    render() {
        return (
            <div className='city-list'>
                <span className="city-list-title">热门城市</span>    
                <ul className="list-pad">
                    <li className="list-item" onClick={this.handleClick.bind(this,'苏州')}>苏州</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'厦门')}>厦门</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'杭州')}>杭州</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'南京')}>南京</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'上海')}>上海</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'深圳')}>深圳</li>
                    <li className="list-item" onClick={this.handleClick.bind(this,'珠海')}>珠海</li>
                </ul>
            </div>
        );
    }
}
