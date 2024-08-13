module.exports = function override(config) {
    config.resolve.fallback = {
        path: require.resolve('path-browserify'),
        os: false,
        crypto: false,
    };
    return config;
};
