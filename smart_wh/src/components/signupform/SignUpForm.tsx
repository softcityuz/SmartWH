import React from "react";
import "./SignUpForm.scss";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface SignUpFormProps {
    close: () => void;
    setRegestred: (value: boolean) => void;
}

function SignUpForm({ close, setRegestred }: SignUpFormProps) {
    const navigate = useNavigate();
    const [signedUp, setSignedUp] = React.useState(false);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/existingcrm");
        setSignedUp(true);
        setRegestred(true);
    };
    return (
        <div className="sign-up">
            <div className="sign-up-header">
                <h1>Sign Up</h1>
                <RiCloseLine onClick={close} className="sign-up-header-icon" />
            </div>
            {!signedUp ? (
                <form onSubmit={onSubmit} className="sign-up-form">
                    <label>
                        <span>*</span>F.SH.I
                    </label>
                    <input
                        required
                        placeholder="Ism"
                        className="sign-up-form-input"
                        type="text"
                    />
                    <div className="row">
                        <div className="inputs">
                            <label>
                                <span>*</span>Email
                            </label>
                            <input
                                placeholder="Familiya"
                                className="sign-up-form-input"
                                type="email"
                            />
                            <label>
                                <span>*</span>Phone
                            </label>
                            <input
                                placeholder="Telefon nomer"
                                className="sign-up-form-input"
                                type="text"
                            />
                        </div>
                        <label htmlFor="photo">
                            <span>*</span>Photo
                            <input type="file" id="photo" />
                            <div className="file-input">
                                <AiOutlinePlus className="file-input-icon" />
                            </div>
                        </label>
                    </div>
                    <label>
                        <span>*</span>F.SH.I
                    </label>
                    <input
                        required
                        placeholder="Parol"
                        className="sign-up-form-input"
                        type="password"
                    />
                    <button type="submit">Send</button>
                </form>
            ) : (
                <div className="signed-up">
                    <img
                        src={require("../../assets/images/done.png")}
                        alt="keep"
                    />
                    <h1>Siz muvaffaqiyatli ro`yxatdan o`tdingiz.</h1>
                    <p>
                        So‘rovingiz 24 soat ichida ko`rib chiqiladi. So‘rovingiz
                        ijobiy hal qilinishi uchun biz bilan shartnoma
                        qilishingiz so‘raladi !
                    </p>
                </div>
            )}
            s{" "}
        </div>
    );
}

export default SignUpForm;
