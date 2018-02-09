import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import Detail from './Detail';
import List from './List';
import NotFound from './404';

class App extends React.Component {
    constructor(props, ctx) {
        super();
    }
    render() {
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
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/detail' component={Detail} />
                        <Route path='/list' component={List} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
