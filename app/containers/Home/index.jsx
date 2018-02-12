import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../containers/Category';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Hello from '../Hello'; 
 
class Home extends React.Component{
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                <Category></Category>
                <Link to='/hello/6688'>
                    <li>test the prop-types</li>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userinfo: state.userinfo
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
