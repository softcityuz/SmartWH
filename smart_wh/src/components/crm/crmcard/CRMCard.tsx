import React from "react";
import "./CRMCard.scss";

interface CRMCardProps {
    status: "active" | "inactive" | "new";
    name: string;
    date: string;
}

function CRMCard({ status, name, date }: CRMCardProps) {
    return (
        <div className="crm-card">
            <div className="crm-card__header">
                <h1 className="crm-card__header__title">Diamond</h1>
                {status !== "new" && (
                    <p className="crm-card__header__date">01 . 01 . 2021</p>
                )}
            </div>
            <p
                className="crm-card__status"
                style={{
                    color: status === "active" ? "#00b300" : "#ff0000"
                }}
            >
                {status === "active"
                    ? "Tasdiqlangan"
                    : status === "inactive"
                    ? "Tasdiqlanmagan"
                    : ""}
            </p>
            <div>
                {status !== "new" && (
                    <button className="crm-card__nonfill">Tahrirlash</button>
                )}
                {status !== "inactive" && (
                    <button className="crm-card__fill">
                        {status === "new" ? "Qo`shish" : "Kirish"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default CRMCard;
