import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from './en.json';
import * as he from './he.json';

const resources = {
    en: en,
    he: he
};


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "he",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;