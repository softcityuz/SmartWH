import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Modal from "react-modal";
import logo from "./logo.svg";
import SignInForm from "../signinform/SignInForm";
import SignUp from "../../pages/signup/SignUp";
import SignUpForm from "../signupform/SignUpForm";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0"
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "10"
    },
    style: {
        zIndex: "9999"
    }
};
function Header() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [isSignIn, setIsSignIn] = React.useState(false);
    const [regestred, setRegestred] = React.useState(false);
    const [routeName, setRouteName] = useState<string>("");

    const ModalComponent = () => {
        let subtitle: any;

        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = "#f00";
        }

        function closeModal() {
            setIsOpen(false);
        }
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {isSignIn ? (
                    <SignInForm
                        close={closeModal}
                        setRegestred={setRegestred}
                    />
                ) : (
                    <SignUpForm
                        close={closeModal}
                        setRegestred={setRegestred}
                    />
                )}
            </Modal>
        );
    };

    const signUp = () => {
        setIsOpen(true);
        setIsSignIn(false);
    };
    const signIn = () => {
        setIsOpen(true);
        setIsSignIn(true);
    };

    return (
        <ul className="menu">
            <li className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </li>

            {regestred ? (
                <>
                    <NavLink
                        onClick={() => setRouteName("/existingcrm")}
                        to="/existingcrm"
                        className={`menu-item hoverable ${
                            routeName === "/existingcrm"
                                ? "menu-item-active"
                                : ""
                        }`}
                    >
                        Mavjud CRM
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/newscrm")}
                        to="/newscrm"
                        className={`menu-item hoverable ${
                            routeName === "/newscrm" ? "menu-item-active" : ""
                        }`}
                    >
                        Yangiliklar
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/contact")}
                        to="/contact"
                        className={`menu-item hoverable ${
                            routeName === "/contact" ? "menu-item-active" : ""
                        }`}
                    >
                        Tariflar
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink
                        onClick={() => setRouteName("/")}
                        to="/"
                        className={`menu-item hoverable ${
                            routeName === "/" ? "menu-item-active" : ""
                        }`}
                    >
                        Asosiy
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/opportunities")}
                        to="/opportunities"
                        className={`menu-item hoverable ${
                            routeName === "/opportunities"
                                ? "menu-item-active"
                                : ""
                        }`}
                    >
                        Imkoniyatlar
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/comments")}
                        to="/comments"
                        className={`menu-item hoverable ${
                            routeName === "/comments" ? "menu-item-active" : ""
                        }`}
                    >
                        Sharhlar
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/news")}
                        to="/news"
                        className={`menu-item hoverable ${
                            routeName === "/news" ? "menu-item-active" : ""
                        }`}
                    >
                        Yangiliklar
                    </NavLink>
                    <NavLink
                        onClick={() => setRouteName("/contact")}
                        to="/contact"
                        className={`menu-item hoverable ${
                            routeName === "/contact" ? "menu-item-active" : ""
                        }`}
                    >
                        Aloqa
                    </NavLink>
                </>
            )}
            {regestred ? (
                <>
                    <div className="user">
                        <img
                            className="user-img"
                            src={require("../../assets/images/User.png")}
                            alt="logo"
                        />
                        <b className="user-name">Jahongir Mardonov</b>
                    </div>
                </>
            ) : (
                <>
                    <li className="menu-item">
                        <div onClick={signUp} className="regester-btn">
                            <p>Ro‘yxatdan o‘tish</p>
                        </div>
                    </li>
                    <li className="menu-item">
                        <button className="login-btn" onClick={signIn}>
                            <FaUserTie className="user-icon" />
                            <p>Login</p>
                        </button>
                    </li>
                </>
            )}
            <li className="menu-item">
                <span>UZ</span> <BiChevronDown className="icon" />
            </li>
            <ModalComponent />
        </ul>
    );
}

export default Header;
