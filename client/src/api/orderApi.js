const { backendAxiosClient } = require('./axiosClient');

const orderApi = {
    checkoutOverview: () => {
        const url = 'order/checkout/overview';

        return backendAxiosClient.get(url);
    },

    checkoutCash: (data) => {
        const url = 'order/checkout/cash';

        return backendAxiosClient.post(url, { address: data });
    },

    checkoutZaloPay: (data) => {
        const url = 'order/checkout/zalopay';

        return backendAxiosClient.post(url, { address: data });
    },

    getOrders: () => {
        const url = 'order/me';

        return backendAxiosClient.get(url);
    },
};

export default orderApi;
