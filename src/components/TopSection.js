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
                    <h1 className='nameh1'>Jesus<br />Martinez</h1>

                </div>
                <div className='heroPT2'>

                    {/* <h2>Web3 Gaming Content Creator</h2> */}

                    <h2 className='cta-h2'><span className='keyword'>Supercharge</span> <span className='text'>your marketing with web3 gaming's leading light, Jesus Martinez. </span><span className='keyword'>Reach new audiences</span><span className='text'> and propel your game to new heights with our collaboration, or </span><span className='keyword'>subscribe</span><span className='text'> to R3wind, your gateway to pioneering trends and insights in the future of web3 gaming.</span></h2>

                    <div className="image-container">
                        <img className='jesus-martinez-image' src={jesusmartinez} alt="Jesus Martinez" />
                    </div>
                    <div className='cta-button-container'>
                        <a href='/contact-me' target="_blank" rel="noopener noreferrer">
                            <button className="cta-button btn1">Let's Collab</button>
                        </a>
                        <a href='https://r3wind.beehiiv.com/subscribe' target="_blank" rel="noopener noreferrer">
                            <button className="cta-button btn2">R3wind</button>
                        </a>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default TopSection;
