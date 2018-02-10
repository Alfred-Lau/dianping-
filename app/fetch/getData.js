import 'whatwg-fetch';
import 'es6-promise';

export const getData = (addr) => {
    return fetch(addr);
};
