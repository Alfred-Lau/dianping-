import * as actionTypes from '../constants/user';

export const update = (data) => {
    return {
        type: actionTypes.USER_UPDATE,
        data
    };
};
