import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ms from "./locales/ms";
import id from "./locales/id";
import hi from "./locales/hi";
import th from "./locales/th";
import fil from "./locales/fil";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "id", label: "Indonesian", native: "Bahasa Indonesia" },
  { code: "ms", label: "Malay", native: "Bahasa Melayu" },
  { code: "th", label: "Thai", native: "ภาษาไทย" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt" },
  { code: "fil", label: "Filipino", native: "Filipino" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
] as const;

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "mars-lang",
    },
    resources: {
      en: { translation: en },
      ms: { translation: ms },
      id: { translation: id },
      hi: { translation: hi },
      th: { translation: th },
      fil: { translation: fil },
    },
    returnNull: false,
  });

export default i18n;
