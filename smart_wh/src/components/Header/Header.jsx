import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
function Header() {
  return (
    <div className="Header">
      <div className="mycontainer">
        <div className="wrapper">
          <div className="leftbox">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="rightbox">
            <ul>
              <li className="home_link">
                <a href="/">Asosiy</a>
              </li>
              <li>
                <a href="/opportunity">Imkoniyatlar</a>
              </li>
              <li>
                <a href="/opportunity">Sharhlar</a>
              </li>
              <li>
                <a href="/opportunity">Yangiliklar</a>
              </li>
              <li>
                <a href="/opportunity">Aloqa</a>
              </li>
              <li>
                <a href="/signin">Ro'yxatdan o'tish</a>
              </li>
              <li>
                <a href="login">
                  <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                  Kirish
                </a>
              </li>
              <li className="change_lang">
                <select>
                  <option value="uz">UZ</option>
                  <option value="uz">RU</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
