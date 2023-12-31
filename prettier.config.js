export default {
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  useTabs: false,
  quoteProps: 'consistent',
  arrowParens: 'always',
  printWidth: 120,
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    'react', // React
    '^react-.*$', // React-related imports
    '^assets/.*$', // Theme
    '^theme/.*$', // Theme
    '^content/.*$', // Contents
    '^contexts/.*$', // Contexts
    '^hooks/.*$', // Hooks
    '^hocs/.*$', // HOCs
    '^pages/.*$', // Pages
    '^components/.*$', // Components
    '^config/.*$', // Configs
    '^config/helpers/.*$', // Helpers
    '^config/constants/.*$', // Constants
    '^[./]', // Other imports
    '.*', // Any uncaught imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
