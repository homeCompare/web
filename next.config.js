// // next.config.js
// module.exports = {
//   i18n: {
//     locales: ['en', 'he'],
//     defaultLocale: 'en',
//   },
// }
const {nextI18NextRewrites} = require('next-i18next/rewrites');
const {supportedLanguages} = require('./src/shared/config');

const localeSubpaths = supportedLanguages.slice(1).reduce(
  (all, item) => ({...all, [item]: item}), {},
);

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
