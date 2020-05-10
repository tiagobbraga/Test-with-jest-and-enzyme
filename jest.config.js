module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
  ],
  // moduleNameMapper: {
  //   'App.css': '<rootDir>/src/App.css',
  // },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    // '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
