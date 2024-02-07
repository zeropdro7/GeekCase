export const preset = 'ts-jest';
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];
export const testPathIgnorePatterns = [
  '<rootDir>/.next/', 
  '<rootDir>/node_modules/'
];
export const moduleNameMapper = {
  '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
};
export const testEnvironment = 'node';
export const testMatch = [
  "**/__tests__/**/*.[jt]s?(x)",
  "**/?(*.)+(spec|test).[tj]s?(x)"
];
