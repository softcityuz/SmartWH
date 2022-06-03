import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import ChancesPage from "./pages/ChancesPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={  <HomePage />} />
          <Route path="/chances" element={ <ChancesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
