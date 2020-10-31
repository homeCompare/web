const NextI18Next = require('next-i18next').default;
const path = require('path');
const {supportedLanguages, defaultLanguage} = require('./config');

module.exports = new NextI18Next({
  otherLanguages: supportedLanguages.slice(1),
  localeSubpaths: supportedLanguages.slice(1).reduce(
    (all, item) => ({...all, [item]: item}), {},
  ),
  defaultNS: 'common',
  debug: true,
  fallbackLng: defaultLanguage,
  supportedLngs: supportedLanguages,
  localePath: path.resolve('./public/static/locales'),
});
