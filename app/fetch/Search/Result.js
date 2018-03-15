import { getSearchResultDataAPI } from '../getData';

export const getResultDate = (page, city, category, keyword) => {
    const res = getSearchResultDataAPI(page, city, category, keyword);
    return res;
};
