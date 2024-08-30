import { backendAxiosClient } from './axiosClient';
const userApi = {
    getAll: (params) => {
        const url = '/user';
        return backendAxiosClient.get(url, { params: params });
    },

    get: (id) => {
        const url = `/user/${id}`;
        return backendAxiosClient.get(url);
    },

    add: (data) => {
        const url = '/user';
        return backendAxiosClient.post(url, data);
    },

    update: (data) => {
        const url = `/user`;
        return backendAxiosClient.patch(url, data);
    },

    getProfile: () => {
        const url = '/user/me';

        return backendAxiosClient.get(url);
    },
};

export default userApi;
