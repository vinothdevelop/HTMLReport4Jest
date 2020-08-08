module.exports = {
    reporters: [
        'default',
        [
            '<rootDir>/index.js',
            {
                title: 'Test Report',
                expandResults: true,
                expandMenuItems: true,
            },
        ],
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
