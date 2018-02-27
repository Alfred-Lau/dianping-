import React, { Component } from 'react';

import './style.less';

export default class LoadMore extends Component {
    loadMoreHandle(){
        if(this.props.isLoadMore){
            return;
        }
        this.props.loadMoreFn();
    }

    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timeoutId;

        const cb = function () {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top <windowHeight) {
                loadMoreFn();
            }
        };
        window.addEventListener('scroll',function () {
            if (this.props.isLoadingMore) {
                return;
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setTimeout(cb, 50);
        }.bind(this), false);
    }
    render () {
        const {isLoadingMore} = this.props;
        return (
            <div className='loadmore' ref='wrapper'>
                {
                    isLoadingMore 
                        ? <span>加载中</span>
                        :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }
}
