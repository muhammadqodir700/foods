import React from 'react';
import logo from "../assets/images/Rectangle.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="leftAddres">
            <div className="roww">
                <div className="leftFooter">
                    <div>
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <h6>Funksional oziq-ovqat</h6>
                        </div>
                        <div className="addres">
                            <div className="street">
                                <h3>Адрес</h3>
                                <h4>ул. Знаменка, 11, Москва</h4>
                                <h4>hello@fmfood.pro</h4>
                                <h4>+ (70) 555 12 34</h4>
                            </div>
                            <div className="local">
                                <h3>Соцсети</h3>
                                <h4>Facebook</h4>
                                <h4>Twiter</h4>
                                <h4>Instagram</h4>
                            </div>
                        </div>


                    </div>


                </div>

            </div>
            </div>
            <div className="rightFooter">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000.155433604524!2d69.178156!3d41.241865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x711a865b810fad04!2zNDHCsDE0JzMwLjciTiA2OcKwMTAnNDEuNCJF!5e0!3m2!1sru!2s!4v1663323535317!5m2!1sru!2s"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Footer;