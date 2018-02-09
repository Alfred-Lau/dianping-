import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

import {getData} from '../../fetch/getData';

class Hello extends React.Component {
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
    render () {
        return (
            <div>
                i am hello
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
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
