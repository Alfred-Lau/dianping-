import React from 'react';

import Header from '../../components/Header';
import Content from './subPage/Content';
import Info from './subPage/Info';
import Comment from './subPage/Comment';
import SpaceBar from '../../components/SpaceBar';

import { getDetail } from '../../fetch/Detail/info';


import './style.less';

class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        const res = getDetail(id);
        this.handleRes(res);

    }

    handleRes(res){
        res
            .then((res) => res.json())
            .then((json) => {
                this.setState(json);
            });
    }
    render() {
        const { id } = this.props.match.params;
        
        return (
            <div className='detail-wrapper'>
                <Header title='商户详情'></Header>
                <Content data={this.state}></Content>
                <SpaceBar options={{title:''}}></SpaceBar>
                <Comment id={id}></Comment>
                <SpaceBar options={{title:''}}></SpaceBar>
                <Info desc={this.state.desc}></Info>
                <SpaceBar options={{ title:'小伙伴还喜欢'}}></SpaceBar>


            </div>
        );
    }
}

export default Detail;
