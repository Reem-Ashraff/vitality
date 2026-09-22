import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHeader from "./locates/en/header.json";
import enHome from "./locates/en/home.json";
import enAbout from "./locates/en/about.json";
import enSolutions from "./locates/en/solutions.json";
import enContact from "./locates/en/contact.json";
import enProduct from "./locates/en/product.json";
import enFooter from "./locates/en/footer.json";
import enQuality from "./locates/en/quality.json";

import arHeader from "./locates/ar/header.json";
import arHome from "./locates/ar/home.json";
import arAbout from "./locates/ar/about.json";
import arSolutions from "./locates/ar/solutions.json";
import arContact from "./locates/ar/contact.json";
import arProduct from "./locates/ar/product.json";
import arFooter from "./locates/ar/footer.json";
import arQuality from "./locates/ar/quality.json";

const currentLanguage =
  localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: enHeader,
          home: enHome,
          about: enAbout,
          solutions: enSolutions,
          contact: enContact,
          product: enProduct,
          footer: enFooter,
          quality: enQuality
        },
      },

      ar: {
        translation: {
          header: arHeader,
          home: arHome,
          about: arAbout,
          solutions: arSolutions,
          contact: arContact,
          product: arProduct,
          footer: arFooter,
          quality: arQuality
        },
      },
    },

    lng: currentLanguage,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = currentLanguage;
document.documentElement.dir =
  currentLanguage === "ar" ? "rtl" : "ltr";

export default i18n;