import { HCM_CITY_ID } from 'constants/inputFormat';
import { cityAxiosClient } from './axiosClient';

export const districtApi = {
    getAll: () => {
        const url = `/district/${HCM_CITY_ID}`;
        return cityAxiosClient.get(url);
    },
};

export const wardApi = {
    getAll: (districtId) => {
        const url = `/ward/${districtId}`;
        return cityAxiosClient.get(url);
    },
};
