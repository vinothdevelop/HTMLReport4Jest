module.exports = {
    reporters: [
        'default',
        [
            '<rootDir>/index.js',
            {
                title: 'Test Report',
                expandResults: true,
                expandMenuItems: true,
                information: [
                    { title: 'Date', value: new Date(), type: 'date' },
                    { title: 'Environment', value: 'CI', type: 'string' },
                ],
            },
        ],
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
