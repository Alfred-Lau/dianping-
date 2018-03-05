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

export const getDetailDateAPI = (id) => {
    const addr = `/api/detail/info/${id}`;
    return fetch(addr);
};

export const getCommentsDataAPI = (page, id) => {
    page = page || 0;
    const addr = `/api/detail/comment/${id}/${page}`;
    return fetch(addr);
};