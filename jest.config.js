module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@demo-shop/(.*)": "<rootDir>/src/$1"
    // "^@components(.*)$": "<rootDir>/components$1",
    // "^@pages(.*)$": "<rootDir>/pages$1",
    // "^@hooks(.*)$": "<rootDir>/hooks$1",
    // "^@styles(.*)$": "<rootDir>/styles$1",
  }
};