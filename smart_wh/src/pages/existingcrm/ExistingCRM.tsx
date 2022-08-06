import React from "react";
import CRMCard from "../../components/crm/crmcard/CRMCard";
import "./ExistingCRM.scss";

function ExistingCRM() {
    return (
        <div className="existing-crm">
            <h1>Mavjud CRM lar</h1>
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="active" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="inactive" name="Diamond" date="01 . 01 . 2021" />
            <CRMCard status="new" name="Diamond" date="01 . 01 . 2021" />
        </div>
    );
}

export default ExistingCRM;
