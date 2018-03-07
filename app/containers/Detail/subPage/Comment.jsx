import React, { Component } from 'react';

import { getComments } from '../../../fetch/Detail/comments';

import CommentItem from '../../../components/CommentItem';


import './style.less';
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false,
            data:[]
        };
    }
    componentDidMount() {
        const { id } = this.props;
        let page = 0;
        const res = getComments(page, id);
        this.handleRes(res);
    }
    handleRes(res) {
        res
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                
                const {hasMore, data} = json;
                this.setState({
                    hasMore,data
                });
            });
    }
    render() {
        return (
            <div className='comment-wrapper'>
                <h3 className='comment-title'>网友点评</h3>    
                {
                    this.state.data.map((item, index) => {
                        return <CommentItem key={index} source={item}></CommentItem>;
                    }) 
                }    
            </div>
        );
    }
}
