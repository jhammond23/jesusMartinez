import React from 'react';
import './Header.css';
import { stack as Menu } from 'react-burger-menu';
import { Tilt } from 'react-tilt';
import { ReactComponent as TwitterXIcon } from '../icons/twitterX/icons8-twitterx-100.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube/icons8-youtube-100.svg';
import { ReactComponent as TiktokIcon } from '../icons/tiktok/icons8-tiktok-100.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram/icons8-instagram-100.svg';

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <a href="/" className="header-logo">
                    Jesus Martinez
                </a>
                <div className='mobile-content'>
                    <Menu right width={'300px'} disableAutoFocus>
                        <a href="/" className="menu-item">Home</a>
                        <a href="https://discord.gg/Wdzgtts3Fr" className="menu-item">L3gion</a>
                        <a href="https://r3wind.beehiiv.com/subscribe" className="menu-item">R3wind</a>
                        <a href="/contact-me" className="menu-item">Contact</a>
                        <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                            <a href="https://twitter.com/0xjesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
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
                    </Menu>
                </div>

                {/* Non-burger menu navigation for larger screens */}

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
                {/* Navigation links */}
                <nav className="header-nav">
                    <a href="/" className="nav-link">Home</a>
                    <a href="https://discord.gg/Wdzgtts3Fr" className="nav-link">L3gion</a>
                    <a href="https://r3wind.beehiiv.com/subscribe" className="nav-link">R3wind</a>
                    <a href="/contact-me" className="nav-link contact-nav-button">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
