import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector)       // Tarayıcı dilini otomatik algılar
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: tr },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: 'en',         // Dil bulunamazsa İngilizce göster
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;