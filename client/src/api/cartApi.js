const { backendAxiosClient } = require('./axiosClient');

const cartApi = {
    getCart: () => {
        const url = '/cart';

        return backendAxiosClient.get(url);
    },
    addToCart: (data) => {
        const url = '/cart';

        return backendAxiosClient.post(url, data);
    },
};

export default cartApi;
