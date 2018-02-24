import React, { Component } from 'react';
import { getListData } from '../../../fetch/Home/Home';

import ListContainer from '../../../components/ListContainer';
import LoadMore from '../../../components/LoadMore';

export default class List extends Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,
            page: 0
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
                {this.state.hasMore
                    ? <LoadMore></LoadMore>
                    : ' '}
            </div>
        );
    }
}