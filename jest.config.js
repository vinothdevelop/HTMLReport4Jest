module.exports = {
    reporters: [
        'default',

        // [
        //     '<rootDir>/index.js',
        //     {
        //         reportPath: './temp/',
        //         reportFileName: 'result.html',
        //         title: 'Test Report',
        //         expandResults: true,
        //         expandMenuItems: true,
        //     },
        // ],
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
