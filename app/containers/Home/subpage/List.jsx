import React, { Component } from 'react';
import { getListData } from '../../../fetch/Home/Home';

import ListContainer from '../../../components/ListContainer';

export default class List extends Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            hasMore: true,
            data: []
        };
    }
    componentDidMount () {
        const addr = '/api/homelist/beijing/3';
        const res = getListData(addr);
        res
            .then((res) => res.json())
            .then((json) => {
                const {hasMore, data} = json;
                if (json) {
                    this.setState({
                        hasMore,data});
                }
            });
    }
    render () {
        return (
            <div>
                {this.state.data.length > 0
                    ? <ListContainer data={this.state.data} />
                    : <div>
                        {/* loding */}
                    </div>}
            </div>
        );
    }
}
