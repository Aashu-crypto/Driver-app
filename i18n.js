import i18next from 'i18next';
import en from './assets/locales/en.json';
import hi from './assets/locales/hi.json';
import * as Localization from 'expo-localization';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const locales = Localization.getLocales();
    const bestLanguage = locales && locales.length > 0 ? locales[0].languageCode : 'en';
    callback(bestLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
