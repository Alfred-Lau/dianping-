import React, { Component } from 'react';
import { getListData,getHomeData } from '../../../fetch/Home/Home';

import ListContainer from '../../../components/ListContainer';
import LoadMore from '../../../components/LoadMore';


import './style.less';
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
        const res = getHomeData(addr);
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
    loadMoreFn(){
        this.setState({
            isLoadingMore:true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        const res = getListData(cityName, page);
        this.handleRes(res);
    }
    handleRes(res){
        res
            .then(resp=>resp.json())
            .then(json=>{
                const {hasMore, data} = json;
                this.setState({
                    isLoadingMore:false,
                    data:this.state.data.concat(data),
                    hasMore:hasMore
                });
              
            });
    }
    render () {
        return (
            <div className='home-list-wrapper'>
                {this.state.data.length > 0
                    ? <ListContainer data={this.state.data} />
                    : <div>
                        {/* loding */}
                    </div>}
                {this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadMore} loadMoreFn={this.loadMoreFn.bind(this)}></LoadMore>
                    : ' '}
            </div>
        );
    }
}
