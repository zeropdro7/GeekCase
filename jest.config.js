const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Este es el archivo donde configuras tu entorno de pruebas, incluyendo las importaciones de jest-dom
  testEnvironment: 'jsdom', // 'jsdom' es el entorno de prueba recomendado para aplicaciones de React
  moduleNameMapper: {
    // Manejar el mapeo de módulos para CSS y cualquier otro archivo de estilo que necesites
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', // Ignora los archivos en la carpeta .next
    '<rootDir>/node_modules/', // Ignora los archivos en la carpeta node_modules
  ],
  transform: {
    // Transforma los archivos ts/tsx con ts-jest
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleDirectories: ['node_modules', '<rootDir>/'], // Indica a Jest dónde buscar módulos
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  // Agrega cualquier otra configuración que necesites aquí...
};

module.exports = createJestConfig(customJestConfig);
