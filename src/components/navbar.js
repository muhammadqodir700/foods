import React, { useState,useEffect } from "react";
import logo from "../assets/images/Rectangle.png";
import { NavLink } from "react-router-dom";
import Our from "./our";
import languages from "../i-18/resources";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import LanguageDetector from "i18next-browser-languagedetector";
const Navbar = () => {



    const [active, setActive] = useState(window.location.pathname);
    const [id, setid] = useState(i18next.language);

    const { t } = useTranslation();
    // console.log('...',active)
    return (
        <div className="navbar">
            <div className="container navContainer">
                <div className="logoName">
                    <img src={logo} alt="" />
                </div>
                <div className="menu ">
                    <NavLink
                        to="/"
                        onClick={() => {
                            setActive("/");
                        }}
                    >
                        <h5

                            className={active === "/" ? "text-success" : "text-dark"}
                        >
                            {t("nav_1")}
                        </h5>
                    </NavLink>
                    <NavLink
                        to="our"
                        onClick={() => {
                            setActive("/our");
                        }}
                    >
                        <h5 className={active === "/our" ? "text-success" : "text-black"}>
                            {t("nav_2")}
                        </h5>
                    </NavLink>
                    <NavLink
                        to="process"
                        onClick={() => {
                            setActive("/process");
                        }}
                    >
                        <h5 className={active === "/process" ? "text-success" : "text-dark"}>
                            {t("nav_3")}
                        </h5>
                    </NavLink>

                    <select
                        className="languageMobile form-select name"
                        defaultValue={i18next.resolvedLanguage}
                        onChange={e => {
                            i18next.changeLanguage(e.target.value);
                        }}
                        // className="form-select name"
                        //  aria-label="Default select example"
                    >
                        {languages?.map((lang,index) => (
                            <option key={index} value={lang.code} >
                                <span>{lang.name}</span>
                            </option>

                        ))}
                    </select>
                </div>
                <div className="language">
                    <div className="lang">
                        {languages?.map((lang,index) => (



                            <div key={index} onClick={() => i18next.changeLanguage(lang.code)} >
                <span onClick={() => {setid(lang.code)}} className={id === lang.code ? "langActive" : "default"}> {lang.name === "O'z"  ? "" : "/"} {lang.name}</span>
              </div>
                        ))}
                    </div>

                    {/*<select className="form-select name" aria-label="Default select example">*/}
                    {/*    <option selected value="1">????</option>*/}
                    {/*    <option value="2">O???z </option>*/}



                    {/*    <option value="3"> En </option>*/}
                    {/*</select>*/}
                </div>
            </div>
        </div>
    );
};

export default Navbar;