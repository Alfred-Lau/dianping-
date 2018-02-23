import React, { Component } from 'react';
import ListItem from '../ListItem/index';

import './style.less';

export default class ListContainer extends Component {
    render () {
        return (
            <div>
                {this.props.data.map((item, index) => <ListItem data={item} key={index}></ListItem>)}
            </div>
        );
    }
}
