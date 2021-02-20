import { useRouter } from 'next/router';
import {isDev} from '@/shared/config';
import allTranslates from '../../public/static/locales';

export const useTranslation = () => {
  const { locale: currentLanguageKey, pathname, asPath, query, push } = useRouter();
  if (!currentLanguageKey) {
    console.error('[i18n.js]: locale isnt recognized');
  }

  return {
    isRTL: currentLanguageKey === 'he',
    currentLanguageKey,
    t: keyString => { 
      const translate = allTranslates[currentLanguageKey][keyString];
      if (!translate) {
        if (isDev) {
          console.warn('[i18n]: couldnt find translate keyString', {currentLanguageKey, keyString});
        }
        return keyString;
      }
      return translate;
    },
    changeLanguage: languageKey => {
      if (languageKey === currentLanguageKey) {
        return;
      }
      push({ pathname, query }, asPath, { locale: languageKey });
    },
  }
};
