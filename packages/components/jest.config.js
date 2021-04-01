// eslint-disable-next-line @typescript-eslint/no-var-requires
const commonConfig = require("../../jest.config")

module.exports = {
  ...commonConfig,
  coveragePathIgnorePatterns: [
    "node_modules",
    "<rootDir>/src/atoms/index.ts",
    "<rootDir>/src/index.ts",
  ],
}
