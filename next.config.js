// next.config.js

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'], // Autoriser les images de Cloudinary
    },
    eslint: {
        // Permet aux builds de production de se terminer même s'il y a des erreurs ESLint
        ignoreDuringBuilds: true,
    },
    output: 'export', // Déplacez cette ligne au niveau racine
};
