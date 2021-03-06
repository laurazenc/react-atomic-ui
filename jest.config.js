
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: ["src/**/*.{ts,tsx, js, jsx}"],
    transform: { ".(ts|tsx)$": "ts-jest/dist" },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
     coveragePathIgnorePatterns: ["<roorDir>/node_modules/", "<rootDir>/src/index.ts"],
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
  }