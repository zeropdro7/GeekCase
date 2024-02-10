module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'lf',
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss']
}
