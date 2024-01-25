import React from 'react';
import './TopSection.css'; // Ensure this CSS file is in the same directory as your component
import { ReactComponent as TwitterXIcon } from '../icons/twitterX/icons8-twitterx-100.svg';
import { ReactComponent as YoutubeIcon } from '../icons/youtube/icons8-youtube-100.svg';
import { ReactComponent as TiktokIcon } from '../icons/tiktok/icons8-tiktok-100.svg';
import { ReactComponent as InstagramIcon } from '../icons/instagram/icons8-instagram-100.svg';
import jesusmartinez from '../media/smile3.png';
import r3 from '../media/logo_2_4.png';
import l3gion from '../media/Discord_Server_Logo.jpg';
import { Tilt } from 'react-tilt';
import BlockchainGrid from './BlockchainGrid'; // Make sure the path is correct


const TopSection = () => {
    return (
        <section className="top-section">
            <BlockchainGrid className='blockchainElement' /> {/* Render the animated grid */}
            <img src={r3} alt="R3" className="top-right-image" />
            <img src={l3gion} alt="L3GION" className="middle-right-image" />
            <div className="content">
                <div className='heroPT1'>
                    <h1 className='nameh1'>Jesus Martinez</h1>
                    <div className="social-media-icons-container">
                        {/* Wrap each icon with Tilt component */}
                        <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                            <a href="https://twitter.com/jesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                                <TwitterXIcon className="icon" />
                            </a>
                        </Tilt>
                        <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                            <a href="https://youtube.com/jesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                                <YoutubeIcon className="icon" />
                            </a>
                        </Tilt>
                        <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                            <a href="https://instagram.com/jesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                                <InstagramIcon className="icon" />
                            </a>
                        </Tilt>
                        <Tilt className="Tilt" options={{ max: 55, perspective: 550, scale: 1.05 }}>
                            <a href="https://tiktok.com/jesusmartinez" target="_blank" rel="noopener noreferrer" className="Tilt-inner">
                                <TiktokIcon className="icon" />
                            </a>
                        </Tilt>
                    </div>
                </div>
                <div className='heroPT2'>
                    
                    <h2>Web3 Gaming Connoisseur</h2>

                    <h3 className='h3'>Great at playing games & even better at finding the best games</h3>

                    <button className="cta-button">Let's Collab</button>

                </div>

            </div>
            <div className="image-container">
                <img src={jesusmartinez} alt="Jesus Martinez" />
            </div>
        </section>
    );
}

export default TopSection;
