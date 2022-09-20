import React, {useState} from 'react';
import logo from "../assets/images/Rectangle.png"
import {NavLink} from "react-router-dom";
import Our from "./our";
const Navbar = () => {

    const [active ,setActive] = useState("Продукты");

    return (
        <div className="navbar">
            <div className="container navContainer">
            <div className="logoName">
                <img src={logo} alt=""/>
            </div>
            <div className="menu ">
                <NavLink to="/"  onClick={() => {setActive("Продукты")}} ><h5 className={ active === "Продукты" ? "text-success" : "text-dark"}>Продукты</h5></NavLink>
                <NavLink to="our" onClick={() => {setActive("О нас")}} ><h5 className={active === "О нас" ? "text-success" : "text-black"}>О нас</h5></NavLink>
                <NavLink to="process" onClick={() => {setActive("Процесс")}}><h5 className={active === "Процесс" ? "text-success" : "text-dark"}>Процесс</h5></NavLink>

                <select className="form-select name" aria-label="Default select example">
                    <option selected value="1">O’z</option>
                    <option value="2">Ру </option>
                    <option value="3"> En </option>
                </select>
            </div>
            <div className="language">
                <h6>Ру
                <span>/ O’z </span>
                <span>/ En</span>
                </h6>

                {/*<select className="form-select name" aria-label="Default select example">*/}
                {/*    <option selected value="1">Ру</option>*/}
                {/*    <option value="2">O’z </option>*/}
                {/*    <option value="3"> En </option>*/}
                {/*</select>*/}
                </div>
            </div>
        </div>
    );
};

export default Navbar;