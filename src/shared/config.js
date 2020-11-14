/* eslint-disable import/prefer-default-export */
const isDev = process.env.NODE_ENV === 'development';
const siteUrl = isDev ? 'http://localhost:3000/' : 'https://www.homecompare.io/';

const supportedLanguages = ['en', 'es', 'ro', 'he'];
const defaultLanguage = 'en';

const firebaseConfig = {
  apiKey: 'AIzaSyCpxYMgLfFbAd3V1GONvpyo0TWGBFh-RRs',
  authDomain: 'homecompare-ac80b.firebaseapp.com',
  databaseURL: 'https://homecompare-ac80b.firebaseio.com',
  projectId: 'homecompare-ac80b',
  storageBucket: 'homecompare-ac80b.appspot.com',
  messagingSenderId: '794063471547',
  appId: '1:794063471547:web:7f03096726c8aa6b4bba9e',
  measurementId: 'G-8XR9VH9XX2',
};

module.exports = {
  isDev,
  siteUrl,
  supportedLanguages,
  defaultLanguage,
  firebaseConfig,
  GA_TRACKING_ID: 'G-KZHRTVZ53K',
};
