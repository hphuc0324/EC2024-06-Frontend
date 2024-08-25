import { get } from 'react-hook-form';

const { backendAxiosClient } = require('./axiosClient');

const productApi = {
    getAll: (params) => {
        const url = '/product';
        return backendAxiosClient.get(url, { params });
    },

    get: (id) => {
        const url = `/product/${id}`;
        return backendAxiosClient.get(url);
    },
};

export default productApi;
