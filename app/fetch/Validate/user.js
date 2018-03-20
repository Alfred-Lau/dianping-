import { validateUserDataAPI } from '../getData';

export const getValidation = (user) => {
    const res = validateUserDataAPI(user);
    return res;
};
