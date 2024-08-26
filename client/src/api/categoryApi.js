const { backendAxiosClient } = require('./axiosClient');

const categoryApi = {
    getAll: () => {
        const url = '/category';

        return backendAxiosClient.get(url);
    },

    get: (categoryId) => {
        const url = `/category/${categoryId}`;

        return backendAxiosClient.get(url);
    },
};
