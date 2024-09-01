const { backendAxiosClient } = require('./axiosClient');

const orderApi = {
    checkoutOverview: () => {
        const url = 'order/checkout/overview';

        return backendAxiosClient.get(url);
    },
};

export default orderApi;
