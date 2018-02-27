import * as actionTypes from '../constants/todo';

const initialState = 0;
export default (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.TODO: {
        return state + 1;
    }
    default:
        return state;
    }
};
