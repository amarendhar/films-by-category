module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["src", "node_modules"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
};
