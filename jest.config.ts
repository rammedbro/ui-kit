import { pathsToModuleNameMapper } from 'ts-jest/utils';
import type { Config } from '@jest/types';

import { compilerOptions } from './tsconfig.json';

export default {
  maxWorkers: 2,
  testTimeout: 10000,
  testEnvironment: 'jsdom',
  rootDir: '.',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: '<rootDir>/tsconfig.unit.json',
      babelConfig: true,
    },
    'vue-jest': {
      experimentalCSSCompile: false
    },

  },
  setupFiles: [
    '<rootDir>/tests/unit/utils/setup.ts'
  ],
  testMatch: [
    '<rootDir>/tests/unit/specs/**/*.test.ts',
    '<rootDir>/src/**/tests/**/*.test.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue2-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue', 'json', 'pcss'],
  moduleNameMapper: {
    '\\.(css|pcss|postcss)\\?module$': 'identity-obj-proxy',
    '@fe-icons/components/.*': '<rootDir>/tests/unit/mocks/empty.vue',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
  },
  coverageDirectory: '<rootDir>/dist/unit/coverage',
  coverageReporters: ['text-summary', 'json-summary', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts,vue}',
    '!<rootDir>/src/components/icons/**/*',
  ],
  reporters: [
    'default',
    '<rootDir>/tests/unit/reporters/total-coverage-reporter.js',
    ['jest-junit', {
      outputDirectory: 'dist/unit/report'
    }]
  ],
  cacheDirectory: '<rootDir>/.cache/jest'
} as Config.InitialOptions;
