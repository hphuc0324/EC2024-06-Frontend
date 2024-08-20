const { backendAxiosClient } = require('./axiosClient');

const authApi = {
    login: (data) => {
        const url = 'auth/login';
        return backendAxiosClient.post(url, data);
    },

    signUp: (data) => {
        const url = 'auth/signup';
        return backendAxiosClient.post(url, data);
    },

    logout: () => {
        const url = 'auth/logout';
        return backendAxiosClient.post(url);
    },
};

export default authApi;
