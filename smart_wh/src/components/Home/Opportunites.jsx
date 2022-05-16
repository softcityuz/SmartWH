import React from "react";
import analtyc from "../../assets/analytic.png";
import finance from "../../assets/finance.png";
import managed from "../../assets/managed.png";
import useful from "../../assets/useful.png";
import planning from "../../assets/planning.png";
import settings from "../../assets/settings.png";

import "./Opportunites.scss";
function Opportunites() {
  return (
    <div className="Opportunites">
      <div className="mycontainer">
        <div className="gen_title">
          <h1>Imkoniyatlar</h1>
        </div>
        <div className="change_section">
          <div className="change_section_item1 active_changer">
            <button onClick={console.log("Hi")}>Nazorat va tahlil</button>
          </div>
          <div className="change_section_item2">
            <button>Ombor</button>
          </div>
          <div className="change_section_item3">
            <button>Sotishni ko'paytirish</button>
          </div>
          <div className="change_section_item4">
            <button>Nazorat va tahlil</button>
          </div>
        </div>
        <div className="wrapper">
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Analitika</h2>
              </div>
              <div className="main">
                <img src={analtyc} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Moliya</h2>
              </div>
              <div className="main">
                <img src={finance} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Boshqaruv</h2>
              </div>
              <div className="main">
                <img src={managed} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Foydali manbalar</h2>
              </div>
              <div className="main">
                <img src={useful} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Rajalashtirish</h2>
              </div>
              <div className="main">
                <img src={planning} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="innerW">
              <div className="name_title">
                <h2>Optimallashtirish</h2>
              </div>
              <div className="main">
                <img src={settings} alt="analtyc" />
                <p>
                  Sotish kassadagi naqd pul miqdori, o'rtacha chek, qoldiqlar,
                  aksiyalar miqdori
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunites;
