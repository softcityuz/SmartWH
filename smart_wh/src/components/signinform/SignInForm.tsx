import React from "react";
import "./SignInForm.scss";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

interface SignInFormProps {
    close: () => void;
    setRegestred: (value: boolean) => void;
}

function SignInForm({ close, setRegestred }: SignInFormProps) {
    const navigate = useNavigate();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        navigate("/existingcrm");
        setRegestred(true);
    };
    return (
        <div className="sign-in">
            <div className="sign-in-header">
                <h1>Sign Up</h1>
                <RiCloseLine onClick={close} className="sign-in-header-icon" />
            </div>
            <form onSubmit={onSubmit} className="sign-in-form">
                <label>
                    <span>*</span>F.SH.I
                </label>
                <input
                    required
                    placeholder="Ism"
                    className="sign-in-form-input"
                    type="text"
                />
                <label>
                    <span>*</span>F.SH.I
                </label>
                <input
                    required
                    placeholder="Ism"
                    className="sign-in-form-input"
                    type="text"
                />
                <Link to="/">parolni unutdingizmi?</Link>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SignInForm;
