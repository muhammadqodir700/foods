import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "";
const loadPath = ``;

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({

        // The defaimport i18next from "i18next";
        fallbackLng: "en",
    ns:["default"],
        defaultNS:"default",
        supportedLngs:["en","hi","bn"],
        backend:{
            loadPath:loadPath
        }
    })
//         import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const apiKey = "";
// const loadPath = ``;
//
// i18next
//     .use(HttpBackend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         // The default language
//         fallbackLng: "en",
//
//         ns: ["default"],
//         defaultNS: "default",
//
//         // Tt shows the supported languages
//         supportedLngs: ["en", "hi", "bn"],
//         backend: {
//             loadPath: loadPath
//         }
//     })ult language
//
// ns: ["default"],
//     defaultNS: "default",
//
//     // It shows the supported languages
//     supportedLngs: ["en","hi","bn"],
//
//     backend: {
//     loadPath: loadPath
// }
// })
