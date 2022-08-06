import React from "react";
import NotificationWrapper from "../../components/crm/notificationwrapper/NotificationWrapper";
import ".//NewsCRM.scss";

function NewsCRM() {
    return (
        <div className="news-crm">
            <h1 className="news-crm__title">NewsCRM</h1>
            <NotificationWrapper title="Bugun" data={[]} />
            <NotificationWrapper
                title="Avval (Oldin)"
                data={[
                    {
                        title: "Sizning ta`rif rejangiz buyicha to`lov muddatingiz keldi! To`lovni  shrtnoma asosida vaqtida to`lashni tavsiya etamiz!",
                        date: "7 January"
                    },
                    {
                        title: "Sizning ta`rif rejangiz buyicha to`lov muddatingiz keldi! To`lovni  shrtnoma asosida vaqtida to`lashni tavsiya etamiz!",
                        date: "7 January"
                    },
                    {
                        title: "Sizning ta`rif rejangiz buyicha to`lov muddatingiz keldi! To`lovni  shrtnoma asosida vaqtida to`lashni tavsiya etamiz!",
                        date: "7 January"
                    },
                    {
                        title: "Sizning ta`rif rejangiz buyicha to`lov muddatingiz keldi! To`lovni  shrtnoma asosida vaqtida to`lashni tavsiya etamiz!",
                        date: "7 January"
                    }
                ]}
            />
        </div>
    );
}

export default NewsCRM;
