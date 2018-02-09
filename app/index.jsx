import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './containers/Home';
import './index.less';
import Detail from './containers/Detail';
import List from './containers/List';

class App extends React.Component {
    render () {
        return (
            <Router>
                <div className='wrapper'>
                    <ul>
                        <li>
                            <Link to='/'> Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/list'> List
                            </Link>
                        </li>
                        <li>
                            <Link to='/detail'> Detail
                            </Link>
                        </li>
                    </ul>
                    <Route exact path='/' component={Home} />
                    <Route path='/detail' component={Detail} />
                    <Route path='/list' component={List} />
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));
