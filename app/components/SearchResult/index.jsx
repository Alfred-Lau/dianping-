import React, { Component } from 'react';

import { getResultDate } from '../../fetch/Search/Result';

import HomeHeader from '../HomeHeader';
import LoadMore from '../LoadMore';
import ResultItem from '../ResultItem';

export default class SearchResult extends Component {

    constructor(props, ctx) {
        super(props);
        this.state = {
            hasMore: true,
            data:[]
        };
    }

    componentDidMount () {
        const page = 0;
        const city = '北京';
        const category = 'food';
        const { keyword } = this.props.match.params;
        getResultDate(page, city, category, keyword)
            .then(res => res.json())
            .then(data => {
                this.setState(data);
            });        
    }
    render() {
        const {hasMore, data} = this.state;
        return (
            <div>
                <HomeHeader belongTo='search'></HomeHeader>
                {
                    data.length > 0 ? (
                        data.map((item, index) => (<ResultItem data={item} kye={index}>{item.distance}</ResultItem>))
                    )
                        : '没有数据啦'    
                }
                {
                    !!hasMore ? (
                        <LoadMore></LoadMore>
                    ):'...'
                }
            </div>
        );
    }
}
