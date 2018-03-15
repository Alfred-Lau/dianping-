import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../containers/Search';

import './style.less';

class HomeHeader extends React.Component {
    constructor (props, ctx) {
        super(props);
    }
    enterHandle (value) {
        console.log(value);
        console.log(encodeURIComponent(value));
        this.props.history.push(`/search/${encodeURIComponent(value)}`);
    }
    render () {
        const { belongTo } = this.props;

        return (
            <div id='home-header' className='clearfix'>
                <div className='home-header-left float-left'>
                    {Object.is(belongTo, 'search')
                        ? (<Link to='/'>
                            <span>{this.props.cityName}</span>
                            <i className='icon-angle-left'>back</i>
                        </Link>)
                        : (<Link to='/city'>
                            <span>{this.props.cityName}</span>
                            <i className='icon-angle-down'></i>
                        </Link>)}
                </div>
                <div className='home-header-right float-right'>
                    <i className='icon-user'></i>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className='icon-search'></i>
                        <Search enterHandle={this.enterHandle.bind(this)}></Search>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
