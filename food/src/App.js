import Navbar from "./components/navbar";
import Products from "./components/products";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Our from "./components/our";
import React from "react";
import Process from "./components/process";
import cookies from "js-cookie";
import languages from "./i-18/resources";
import { useTranslation } from "react-i18next";

function App() {
  const currentLanguageCode = cookies.get("i18next") || "uz";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="our" element={<Our />} />
          <Route path="process" element={<Process />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
