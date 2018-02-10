import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../../containers/Search';

import './style.less';

class HomeHeader extends React.Component {
    constructor (props, ctx) {
        super(props);
    }
    render () {
        return (
            <div id='home-header' className='clearfix'>
                <div className="home-header-left float-left" >
                    <Link to='/city'>
                        <span>
                            {this.props.cityName}
                        </span>
                        <i className='icon-angle-down'></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className='icon-user'></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className='icon-search'></i>    
                        <Search></Search>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
