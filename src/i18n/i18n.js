import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Import translation files
import enTranslation from "./locales/en/translation.json"
import frTranslation from "./locales/fr/translation.json"
import esTranslation from "./locales/es/translation.json"
import deTranslation from "./locales/de/translation.json"

// Resources object with translations
const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  es: {
    translation: esTranslation,
  },
  de: {
    translation: deTranslation,
  },
}

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
