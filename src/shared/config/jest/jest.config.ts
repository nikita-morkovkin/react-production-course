/** @type {import('jest').Config} */
import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "node",
    "json"
  ],
  modulePaths: [
    "<rootDir>"
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@alias/(.*)': '<rootDir>/src/path/to/alias/$1'
  }
};

export default config;
