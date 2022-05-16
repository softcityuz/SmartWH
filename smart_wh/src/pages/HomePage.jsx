import React from "react";
import Header from "../components/Header/Header";
import Automation from "../components/Home/Automation";
import Main from "../components/Home/Main";
import Opportunites from "../components/Home/Opportunites";
function HomePage() {
  return (
    <div>
      <Header />
      <Main />
      <Opportunites />
      <Automation />
    </div>
  );
}

export default HomePage;
