import {getCommentsDataAPI} from '../getData';

export const getComments = (page,id) => {
    return getCommentsDataAPI(page,id);
};