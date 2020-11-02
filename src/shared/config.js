/* eslint-disable import/prefer-default-export */
const isDev = process.env.NODE_ENV === 'development';
const siteUrl = isDev ? 'http://localhost:8000/' : 'http://www.homecompare.io/';

const supportedLanguages = ['en', 'es', 'ro', 'he'];
const defaultLanguage = 'en';

module.exports = {
  isDev,
  siteUrl,
  supportedLanguages,
  defaultLanguage,
  GA_TRACKING_ID: 'G-V314HPC4XM',
};
