/* eslint-disable */
export default {
  displayName: 'query-impl-core',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/query-impl-core',

  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 83,
      statements: 85,
    },
  },
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/testing/**/*.*',
  ],
};
