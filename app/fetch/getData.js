import 'whatwg-fetch';
import 'es6-promise';

export const getHomeDataAPI = (addr) => {
    return fetch(addr);
};

export const getListDataAPI = (cityname, page)=>{
    const city = cityname || 'beijing';
    const addr = `/api/homelist/${city}/${page}`;
    return fetch(addr);
};