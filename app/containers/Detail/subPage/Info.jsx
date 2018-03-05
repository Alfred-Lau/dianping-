import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        const {desc} = this.props;
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        );
    }
}
