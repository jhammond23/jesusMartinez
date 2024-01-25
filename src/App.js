import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import ContactForm from './components/ContactForm';
import AffiliateLinks from './components/AffiliateLinks';
import TopSection from './components/TopSection';
import MiddleSection from './components/MiddleSection';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className='parentBG'>
            <TopSection />
            <MiddleSection /> 
            <SocialLinks />
            <ContactForm />
            <AffiliateLinks />
          </div>
        } />
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
