
module.exports = {
    preset: 'ts-jest',
    projects: ['<rootDir>/jest.config.js'],
    modulePaths: [`<rootDir>/src/`],
    collectCoverageFrom: ["src/**/*.{ts,tsx, js, jsx}"],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    coveragePathIgnorePatterns: ["<roorDir>/node_modules/", "<rootDir>/src/index.ts"],
    modulePathIgnorePatterns: ["<rootDir>/dist/"]

  }