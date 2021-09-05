export default {
   preset: 'ts-jest',
   verbose: true,
   clearMocks: true,
   collectCoverage: true,
   coverageDirectory: 'coverage',
   coverageProvider: 'v8',
   rootDir: './src',
   setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
   testEnvironment: 'jsdom',
   moduleNameMapper: {
      '\\.(scss|css|jpg|png|gif)$': '<rootDir>/file.mock.ts',
   },
};
