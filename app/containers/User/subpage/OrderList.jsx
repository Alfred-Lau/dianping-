import React, { Component } from 'react';

import { getOrderListData } from '../../../fetch/User/orderList';

import OrderListItem from './OrderListItem';

export default class OrderList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount () {
        const username = 'ls';
        getOrderListData(username).then((res) => res.json()).then(data => {
            this.setState({data});
        });
    }
    render () {
        return (
            <div>
                {this.state.data.map((item, index) => {
                    return (<OrderListItem key={index} data={item}>
                    </OrderListItem>
                    );
                })}
            </div>
        );
    }
}
