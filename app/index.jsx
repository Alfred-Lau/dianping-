import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers';

import './index.less';
import './static/css/font.css';

import configStore from './store/storeConfig';

const store = configStore();

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
