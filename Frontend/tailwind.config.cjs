/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/components/*.tsx',
    './src/components/**/*.tsx',
    './src/components/pages/*.tsx',
    './src/components/pages/**/*.tsx',
    './src/routes/*tsx.',
    './src/main/*.tsx'
  ],
  theme: {
    screens: {
      'mobile': {'min': '0px', 'max': '767px'},
      'tablet': {'min': '768px', 'max': '1023px'},
      'laptop': {'min': '1024px', 'max': '1279px'},
      'lg-laptop': {'min': '1280px', 'max': '1535px'},
      'desktop': {'min': '1536px'}
    }
  },
  plugins: [],
}
