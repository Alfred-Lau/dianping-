import { createStore } from 'redux';
import rootReducers from '../reducers';

export default (initialState) => {
    const store = createStore(rootReducers, initialState,
    // this is right:经验就是遇到问题，直接看官方文档，必须da!!!!
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
