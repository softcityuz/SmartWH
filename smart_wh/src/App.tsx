import React from 'react';
import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Opportunities from './pages/opportunities/Opportunities';
import Comments from './pages/comments/Comments';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import SignUp from './pages/signup/SignUp';
import Modal from 'react-modal';
import SignUpForm from './components/signupform/SignUpForm';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '10'
    },
    style: {
        zIndex: '9999'
    }
};

function App() {
        const [modalIsOpen, setIsOpen] = React.useState(false);

    const ModalComponent = () => {
        let subtitle: any   ;

        function openModal() {
            setIsOpen(true);
        }

        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#f00';
        }

        function closeModal() {
            setIsOpen(false);
        }
        return (
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <SignUpForm/>
            </Modal>
        );
    }
  return (
    <div className="App">
      <Header onClickSignIn={()=>setIsOpen(true)} onClickSignUp={()=>setIsOpen(true)}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="comments" element={<Comments />} />
        <Route path="news" element={<News />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ModalComponent />
    </div>
  );
}

export default App;
