import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        const {title, subTitle,desc, star,price,img} = this.props.data;
        console.log(this.props.data);

        return (
            <div className='content-wrapper'>
                <img  style={{width: 40, height: 40 }} alt="logo" />
                <div className="text-info">
                    <h3>
                        {title}
                    </h3>

                </div>
                
            </div>
        );
    }
}
