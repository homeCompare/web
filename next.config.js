const withPlugins = require('next-compose-plugins');
const optimizedImages = require('@mrroll/next-optimized-images');
// const {nextI18NextRewrites} = require('next-i18next/rewrites');
// const {supportedLanguages} = require('./src/shared/config');

// const localeSubpaths = supportedLanguages.slice(1).reduce(
//   (all, item) => ({...all, [item]: item}), {},
// );

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
});

// module.exports = {
//   // rewrites: async () => nextI18NextRewrites(localeSubpaths),
//   publicRuntimeConfig: {
//     localeSubpaths,
//   },
// };
