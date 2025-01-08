// .eslintrc.js

module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Intègre Prettier avec ESLint
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error', // Affiche les erreurs Prettier comme des erreurs ESLint
    // Ignorer la propriété 'jsx' dans les balises <style jsx>
    'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
    // Ajoutez d'autres règles personnalisées ici si nécessaire
  },
};
