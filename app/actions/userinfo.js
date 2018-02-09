import * as actionTypes from '../constants/userinfo';

export const update = (data) => {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    };
};
