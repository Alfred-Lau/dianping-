import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import './style.less';

const data = [
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    },
    {
        title: '景点'
    }, {
        title: '景点'
    }, {
        title: '景点'
    }
];

class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            index:0
        };
    }
    render () {
        const options = {
            auto: 2500,
            // bind the refresh
            callback: (index) => {
                this.setState({
                    index
                });
            }
        };
        return (
            <div className='wrapper'>
                <ReactSwipe className='home-category' swipeOptions={options}>
                    <div className='carousel-item'>
                        <ul>
                            {data.map((item, index) => <li className='item' key={index}>
                                {item.title}
                            </li>)}
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul>
                            {data.map((item, index) => <li className='item' key={index}>
                                {item.title}
                            </li>)}
                        </ul>
                    </div>
                    <div className='carousel-item'>
                        <ul>
                            {data.map((item, index) => <li className='item' key={index}>
                                {item.title}
                            </li>)}
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        {
                            [0, 1, 2].map((item,index) => (
                                <li key={index} className={this.state.index == item ? 'selected': ''}></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Category;
