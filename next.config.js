const withPlugins = require('next-compose-plugins');
const optimizedImages = require('@mrroll/next-optimized-images');
const {supportedLanguages, defaultLanguage} = require('./src/shared/config');

const isDev = process.env.NODE_ENV === 'development';

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
    handleImages: [
      'jpg',
      'png',
      'ico',
    ],
    /* config for next-optimized-images */
  }],
  // your other plugins here
], {
  i18n: {
    locales: supportedLanguages,
    defaultLocale: defaultLanguage,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:match*',
        destination: isDev ? 'http://localhost:3001/:match*' : 'https://api.homeCompare.io/:match*',
      },
    ];
  },
});
