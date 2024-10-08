import axios from 'axios';

export const backendAxiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_DOMAIN_URL,
    withCredentials: true,
});

export const cityAxiosClient = axios.create({
    baseURL: process.env.REACT_APP_CITY_BASE_URL,
    withCredentials: false,
});

backendAxiosClient.interceptors.request.use(
    (config) => {
        config.headers['x-authorization'] = localStorage.getItem('access_token') || null;
        config.headers['x-client-id'] = JSON.parse(localStorage.getItem('user'))?._id || null;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

backendAxiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Example: Checking for an expired token error
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                if (!refreshToken) {
                    return Promise.reject(error);
                }

                const response = await backendAxiosClient.post('/auth/refresh-token', null, {
                    headers: {
                        'x-refresh-token': refreshToken,
                    },
                });
                const tokens = response.data.tokens;

                localStorage.setItem('access_token', tokens.accessToken);
                localStorage.setItem('refresh_token', tokens.refreshToken);

                originalRequest.headers['x-authorization'] = tokens.accessToken;

                return backendAxiosClient(originalRequest);
            } catch (refreshError) {}
        }

        return Promise.reject(error);
    },
);
