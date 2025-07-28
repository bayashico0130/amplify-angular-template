import type { Config } from 'jest';
import { createEsmPreset } from 'jest-preset-angular/presets';

export default {
  ...createEsmPreset(),
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!.*\.mjs$)',
  ],
} satisfies Config;