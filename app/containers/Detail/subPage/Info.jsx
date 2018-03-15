import React, { Component } from 'react';

export default class Info extends Component {
    render () {
        const {desc} = this.props;
        return (
            <div className='info-style'>
                <p
                    className='dealer-title'
                >
          商户信息
                </p>
                <div
                    className='concise-info'    
                    dangerouslySetInnerHTML={{ __html: desc }}>
                </div>
            </div>
        );
    }
}
