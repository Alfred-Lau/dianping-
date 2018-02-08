import React from 'react';
import {render} from 'react-dom';

import './index.less';

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                hello,react.
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));

