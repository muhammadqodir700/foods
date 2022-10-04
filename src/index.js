import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import Our from "./components/our";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "uz",
        supportedLngs: ["uz", "en", "ru"],
        debug: false,
        detection: {
            order: ["localStorage"],
            caches: ["localStorage"],
        },
        react: { useSuspense: true },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
    });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



