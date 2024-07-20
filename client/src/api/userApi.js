import axios from 'axios';
import axiosClient from './axiosClient';

const userApi = {
    getAll: (params) => {
        const url = '/user';
        return axios.get(url, { params: params });
    },

    get: (id) => {
        const url = `/user/${id}`;
        return axios.get(url);
    },

    add: (data) => {
        const url = '/user';
        return axios.post(url, data);
    },

    update: (data) => {
        const url = `/user/${data.id}`;
        return axios.patch(url, data);
    },
};
