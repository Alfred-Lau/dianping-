import React, { Component } from 'react';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import SpaceBar from '../../components/SpaceBar';
import CityList from '../../components/CityList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

class City extends Component {
    constructor (props, ctx) {
        super(props, ctx);
        console.log(userInfoActionsFromOtherFile);
    }
    changeCity (newCity) {
        if (newCity === null) {
            return;
        }
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        localStorage.setItem('cityname', newCity);

        this.props.history.replace('/');
    }
    render () {
        return (
            <div className='city'>
                <Header></Header>
                <CurrentCity city={this.props.userinfo.cityName}></CurrentCity>
                <SpaceBar></SpaceBar>
                <CityList fn={this.changeCity.bind(this)}></CityList>
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
