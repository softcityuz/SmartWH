import React from "react";
import "./Footer.scss";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <div className="content-item">
                        <img
                            className="icon"
                            src={require("../../assets/icons/operator.webp")}
                            alt="operator"
                        />
                        <div>
                            <h2>Smart Warehouse</h2>
                            <p>+998 99 999 99 99</p>
                        </div>
                    </div>
                    <div className="content-item">
                        <MdLocationPin className="icon" />
                        <div>
                            <h2>Smart Warehouse</h2>
                            <p>+998 99 999 99 99</p>
                        </div>
                    </div>
                    <div className="content-item">
                        <HiOutlineMail className="icon" />
                        <div>
                            <h2>Smart Warehouse</h2>
                            <p>+998 99 999 99 99</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="opportunities">Imkoniyatlar</Link>
                    <Link to="comments">Sharhlar</Link>
                    <Link to="news">Yangiliklar</Link>
                    <Link to="contact">Aloqa</Link>
                </div>
                <div>
                    <div className="content-item">
                        <FaInstagram className="icon" />
                        <a href="https://instagram.com">@SoftCity_Company</a>
                    </div>
                    <div className="content-item">
                        <FaTelegram className="icon" />
                        <a href="https://t.me">@SoftCity_Company</a>
                    </div>
                    <div className="content-item">
                        <FaFacebook className="icon" />
                        <a href="https://facebook.com">@SoftCity_Company</a>
                    </div>
                    <div className="content-item">
                        <FaTwitter className="icon" />
                        <a href="https://twitter.com">@SoftCity_Company</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>
                    Mualliflik huquqi © 2021 Vinovathemes. Barcha huquqlar
                    himoyalangan.
                </p>
                <div>
                    <img
                        src={require("../../assets/images/Uzcard.png")}
                        alt="Uzcard"
                    />
                    <img
                        src={require("../../assets/images/Visa.png")}
                        alt="Visa"
                    />
                    <img
                        src={require("../../assets/images/mastercard.png")}
                        alt="mastercard"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
