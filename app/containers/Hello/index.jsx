import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';

class Hello extends React.Component {
    constructor (props, ctx) {
        super(props);
    }
    componentDidMount () {
        console.log(this.props.userinfo);
        this.props.userinfoActions.update({
            cityname: 'Nanjing'
        });
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
