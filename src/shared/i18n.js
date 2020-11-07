// const NextI18Next = require('next-i18next').default;
// const path = require('path');
// const {supportedLanguages, defaultLanguage} = require('./config');
const {noop} = require('lodash');
const enStrings = require('../../public/static/locales/en/common.json');

const useTranslation = () => ({
  t: keyString => enStrings[keyString],
  i18n: {
    changeLanguage: () => noop,
  },
});

module.exports = {
  useTranslation,
};
// module.exports = new NextI18Next({
//   otherLanguages: supportedLanguages.slice(1),
//   localeSubpaths: supportedLanguages.slice(1).reduce(
//     (all, item) => ({...all, [item]: item}), {},
//   ),
//   defaultNS: 'common',
//   debug: true,
//   fallbackLng: defaultLanguage,
//   supportedLngs: supportedLanguages,
//   localePath: path.resolve('./public/static/locales'),
// });
