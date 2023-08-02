exports.config = {
    tests: './tests/*_test.js',
    output: './screenshots',
    helpers: {
        Puppeteer: {
            url: 'https://dashboard.visme.co/v2/login',
            show: true,
        },
    },
    include: {
        I: './steps_file.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'login-tests',
};