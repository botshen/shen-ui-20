module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};
