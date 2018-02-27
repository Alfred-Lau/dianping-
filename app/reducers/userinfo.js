import * as actionTypes from '../constants/userinfo';

// TODO: initialState可以是各种数据类型
const initialState = [];
export default (state = initialState , action) => {
    switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
        return state.concat([action.data]);
    default:
        return state;
    }
};
