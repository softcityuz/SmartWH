import React from "react";
import { FaRocket } from "react-icons/fa";
import "./CRMNewsCard.scss";
interface CRMNewsCardProps {
    title: string;
    date: string;
    isLast?: boolean;
}

function CRMNewsCard({ title, date, isLast }: CRMNewsCardProps) {
    return (
        <div
            className="crm-news-card"
            style={{
                borderBottom: isLast
                    ? "none"
                    : "4px solid rgba(77, 83, 116, 0.3);"
            }}
        >
            <FaRocket className="crm-news-card__icon" />
            <div className="crm-news-card__body">
                <p>{title}</p>
                <b>{date}</b>
            </div>
        </div>
    );
}

export default CRMNewsCard;
