import path from 'path';

/* eslint-disable */
export default {
  displayName: 'query-impl-app',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/query-impl-app',
  setupFilesAfterEnv: [
    path.join(process.cwd(), 'jest.setup.ts'),
    '<rootDir>/jest.setup.ts',
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 85,
  //     functions: 85,
  //     lines: 83,
  //     statements: 85,
  //   },
  // },
  //TODO uncomment when tests are complete
  collectCoverageFrom: ['./app/**/*.{js,jsx,ts,tsx}'],
};
