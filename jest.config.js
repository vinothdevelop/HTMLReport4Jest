module.exports = {
    "reporters": [
        "default",
        "<rootDir>/index.js"
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss|cssmodule)$': 'identity-obj-proxy'
    }, setupFilesAfterEnv: [
        '<rootDir>/src/setupTests.js'
    ]
};