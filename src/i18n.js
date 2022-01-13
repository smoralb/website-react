import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const DETECTION_OPTIONS = {
  order: ["navigator"],
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    fallbackLng: "en",
    react: {
      useSuspense: true,
    },
  });

export default i18n;
