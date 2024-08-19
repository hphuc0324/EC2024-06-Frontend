const { backendAxiosClient } = require('./axiosClient');

const authApi = {
    login: (data) => {
        const url = 'auth/login';
        return backendAxiosClient.post(url, data);
    },
};

export default authApi;
