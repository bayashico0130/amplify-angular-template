import type { Config } from 'jest';
import * as path from 'path';

const esModules = ["lodash-es", "nanoid"].join("|");

export default {
  rootDir: path.resolve(__dirname, ''),
  globals: {},
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@angular|@aws-amplify|@ag-grid-community|nanoid))',
    '\\.pnp\\.[^\\/]+$',
],
} satisfies Config;