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
    increaseQuantity: (productId) => {
        const url = `/cart/inc/product/${productId}`;

        return backendAxiosClient.patch(url);
    },
    decreaseQuantity: (productId) => {
        const url = `/cart/dec/product/${productId}`;

        return backendAxiosClient.patch(url);
    },
    removeProduct: (productId) => {
        const url = `/cart/remove/product/${productId}`;

        return backendAxiosClient.patch(url);
    },
};

export default cartApi;
