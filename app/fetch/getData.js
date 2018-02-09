import 'whatwg-fetch';
import 'es6-promise';

export const getData = (addr) => {
    fetch(addr)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            return data;
        });
};
