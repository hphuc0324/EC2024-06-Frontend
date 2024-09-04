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

    update: (categoryId, data) => {
        const url = `/category/${categoryId}`;

        return backendAxiosClient.patch(url, data);
    },

    delete: (categoryId) => {
        const url = `/category/${categoryId}`;

        return backendAxiosClient.delete(url);
    },
};

export default categoryApi;
