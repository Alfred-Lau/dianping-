import { getOrderListDataAPI } from '../getData';

export const getOrderListData = (username) => {
    const res = getOrderListDataAPI(username);
    return res;
};
