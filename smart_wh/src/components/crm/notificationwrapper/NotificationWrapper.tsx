import React from "react";
import CRMNewsCard from "../crmnewscard/CRMNewsCard";
import "./NotificationWrapper.scss";

interface NotificationWrapperProps {
    title: string;
    data: {
        title: string;
        date: string;
    }[];
}

function NotificationWrapper({ title, data }: NotificationWrapperProps) {
    return (
        <div className="notification-wrapper">
            <div className="notification-wrapper__header">
                <h1>{title}</h1>
            </div>
            <div className="notification-wrapper__body">
                {data.length > 0 ? (
                    data.map((item: any, i: number) => (
                        <CRMNewsCard
                            title={item.title}
                            date={item.date}
                            key={i}
                            isLast={i === data.length - 1}
                        />
                    ))
                ) : (
                    <h3>Yangi bildirishnomalar yo'q.</h3>
                )}
            </div>
        </div>
    );
}

export default NotificationWrapper;
