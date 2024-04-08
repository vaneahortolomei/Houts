import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18next/languages/en_US.json';
import de from '../i18next/languages/de_DE.json';

export const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  interpolation: {
    escapeValue: false
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en'
});
export default i18n;
