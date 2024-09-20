// jest.config.js
module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
  