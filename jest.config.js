/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'jsx', 'css', 'scss', 'json'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '\\.jsx$': 'babel-jest',
    '\\.js$': 'babel-jest',
    '\\.css$': 'jest-transform-stub',
    '\\.scss$': 'jest-transform-stub',
  },
};
