import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../containers/Category';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Hello from '../Hello'; 
import SpaceBar from '../../components/SpaceBar';
import Ad from './subpage/Ad';
import List from './subpage/List';
 
class Home extends React.Component{
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                <Category></Category>
                <SpaceBar options={{}}></SpaceBar>
                <Ad></Ad>
                <SpaceBar options={{ title: '猜你喜欢' }}></SpaceBar>
                <List></List>
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
