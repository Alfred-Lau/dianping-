import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';

import './index.less';
import './static/css/font.css';

import configStore from './store/storeConfig';

const store = configStore();

render(<Provider store={store}>
    <AppRouter />
</Provider>, document.getElementById('root'));
