import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

import { getData } from '../../fetch/getData';

import PropTypes from 'prop-types';

class Hello extends React.Component {
    static defaultProps = {
        name: 'king of code'
    }
    constructor (props, ctx) {
        super(props);
        this.state = {
            a: 1,
            b: 2,
        };
    }
    handleElement(){
        let val = {
            a: 3,
            b: 4
        };
        console.log('i am handling');
        this.setState(val);
    }
    componentDidMount() {
        this.handleElement();
    }
    componentDidUpdate () {
        console.log(this.props.userinfo);
    }
    // TODO: notice the method to use th router params.
    render () {
        return (
            <div>
                {this.props.match.params.id}
                &nbsp;
                {this.props.name}
            </div>
        );
    }
}

Hello.propTypes = {
    name:PropTypes.string.isRequired
};

// -----  import react redux
const mapStateToProps = (state, ownProps) => {
    return {
        userinfo: state.userinfo
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
