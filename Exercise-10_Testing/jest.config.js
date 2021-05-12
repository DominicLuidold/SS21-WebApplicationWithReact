module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
};
