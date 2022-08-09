import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Opportunities from "./pages/opportunities/Opportunities";
import Comments from "./pages/comments/Comments";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import SignUp from "./pages/signup/SignUp";
import ExistingCRM from "./pages/existingcrm/ExistingCRM";
import NewsCRM from "./pages/newscrm/NewsCRM";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="opportunities" element={<Opportunities />} />
                <Route path="comments" element={<Comments />} />
                <Route path="news" element={<News />} />
                <Route path="contact" element={<Contact />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="existingcrm" element={<ExistingCRM />} />
                <Route path="newscrm" element={<NewsCRM />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
