// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Ensure the CSS file is created and properly linked
import { Tilt } from 'react-tilt';
import { ReactComponent as TwitterXIcon } from '../icons/twitterX/icons8-twitterx-100.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube/icons8-youtube-100.svg';
import { ReactComponent as TiktokIcon } from '../icons/tiktok/icons8-tiktok-100.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram/icons8-instagram-100.svg';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p>© {new Date().getFullYear()} Jesus Martinez. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                        <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                        <a href="/contact-me" className="footer-link">Contact</a>
                    </div>
                </div>
                <div className="developer-contact">
                    <p>For development inquiries:</p>
                    <a href="/contact-developer" className="developer-contact-button">Contact Developer</a>
                </div>
                <div className="social-media-icons">
                <div className="social-media-icons-container">
                    {/* Social media icons */}
                    <Tilt className="Tilt xCont" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                        <a href="https://twitter.com/0xjesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner xAnchor">
                            <TwitterXIcon className="icon" />
                        </a>
                    </Tilt>
                    <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                        <a href="https://youtube.com/@0xjesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                            <YoutubeIcon className="icon" />
                        </a>
                    </Tilt>
                    <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                        <a href="https://instagram.com/0xjesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                            <InstagramIcon className="icon" />
                        </a>
                    </Tilt>
                    <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                        <a href="https://www.tiktok.com/@0xjesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                            <TiktokIcon className="icon" />
                        </a>
                    </Tilt>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
