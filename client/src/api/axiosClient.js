import axios from 'axios';

export const backendAxiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
});

export const cityAxiosClient = axios.create({
    baseURL: process.env.REACT_APP_CITY_BASE_URL,
    withCredentials: false,
});
