import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import AffiliateLinks from './components/AffiliateLinks';
import TopSection from './components/TopSection';
import MiddleSection from './components/MiddleSection';
import './App.css';
import StreamSchedule from './components/StreamSchedule';
import BottomSection from './components/BottomSection';
import ContactDev from './components/ContactDev';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main route */}
        <Route path="/" element={
          <div className='parentBG'>
            <TopSection />
            <MiddleSection />
            <BottomSection />
          </div>
        } />
        {/* Contact Me route */}
        <Route path='/contact-me' element={<ContactForm />} />
        <Route path='/contact-developer' element={<ContactDev />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
