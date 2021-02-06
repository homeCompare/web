import { useRouter } from 'next/router';
import allTranslates from '../../public/static/locales';

export const useTranslation = () => {
  const { locale: currentLanguageKey, pathname, asPath, query, push } = useRouter();
  if (!currentLanguageKey) {
    console.error('[i18n.js]: locale isnt recognized');
  }

  return {
    isRTL: currentLanguageKey === 'he',
    currentLanguageKey,
    t: keyString => allTranslates[currentLanguageKey][keyString],
    changeLanguage: languageKey => {
      if (languageKey === currentLanguageKey) {
        return;
      }
      push({ pathname, query }, asPath, { locale: languageKey });
    },
  }
};
