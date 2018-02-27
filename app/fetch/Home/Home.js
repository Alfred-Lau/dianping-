import { getHomeDataAPI,getListDataAPI } from '../getData';

export const getHomeData = (addr) => {
    const res = getHomeDataAPI(addr);
    return res;
};

export const getListData = (cityname,page) => {
    const res = getListDataAPI(cityname,page);
    return res;
};
