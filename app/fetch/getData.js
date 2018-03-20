import 'whatwg-fetch';
import 'es6-promise';

export const getHomeDataAPI = (addr) => {
    return fetch(addr);
};

export const getListDataAPI = (cityname, page) => {
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

export const getSearchResultDataAPI = (page, city, category, keywrod) => {
    // check

    const api = '/api/search/${page}/${city}/${category}/${keyword}';
    return fetch(api);
};

export const getOrderListDataAPI = (username) => {
    const api = `/api/orderlist/${username}`;
    return fetch(api);
};

export const validateUserDataAPI = (user) => {
    console.log('userinfo mes',user);
    const params = {
        method: 'POST',
        body: JSON.stringify(user)
    };

    return fetch('/api/validate',params);
};
