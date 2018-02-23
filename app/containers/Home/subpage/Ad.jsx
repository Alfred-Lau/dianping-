import React, { Component } from 'react';

import HomeAd from '../../../components/HomeAd/index';

import { getHomeData } from '../../../fetch/Home/Home';

export default class Ad extends Component {
    constructor (props, ctx) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount () {
        const res = getHomeData('/api/homead');
        res.then((resp) => {
            return resp.json();
        }, (err) => {
            console.log(err.message);
        }).then((data) => {
            if (data.length) {
                this.setState({data});
            }
        });
    }
    render () {
        return (
            <div>
                {this.state.data.length > 0
                    ? <HomeAd data={this.state.data}></HomeAd>
                    : <div>
                        {/* loading */}
                    </div>}
            </div>
        );
    }
}
