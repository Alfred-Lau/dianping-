import * as actionTypes from '../constants/user';

// TODO: initialState可以是各种数据类型
const initialState = {};
export default (state = initialState , action) => {
    switch (action.type) {
    case actionTypes.USER_UPDATE:
        return action.data;
    default:
        return state;
    }
};
