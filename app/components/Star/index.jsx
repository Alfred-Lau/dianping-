import React, { Component } from 'react';

import './style.less';
export default class Star extends Component {
    render() {
        const { score } = this.props;
        console.log(score);
        const boundry = Math.round(score);
        let starArr = [];
        let index;
        for (index = 0; index < boundry; index++){
            starArr.push('red');
        }
        while(index < 5) {
            starArr.push('black');
            index++;
        }
        console.log(starArr);
        return (
            <div>
                {
                    starArr.map((item, index) => {
                        return <i className={`icon-star ${item}`} key=
                            {index}/>;
                    })
                }    
            </div>
        );
    }
}
