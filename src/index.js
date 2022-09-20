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
    supportedLngs: ["en", "uz", "ru"],
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: true },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
// import "./components/i18n.js";
// import Test from "./components/test";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <Suspense fallback="...loading">
//       <App />
//     </Suspense>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
