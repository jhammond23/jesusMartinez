import React from 'react';
import './MiddleSection.css';
import BlockchainGrid from './BlockchainGrid';
import { Tilt } from 'react-tilt';
import './CombinedSections.css'; // Ensure this CSS file is created


import galaGames from '../media/galaGames.jpg';
import galaGold from '../media/galaGold.jpg';
import galaMusic from '../media/galaMusic.jpg';
import galaFilm from '../media/galaFilm.jpg';
import CombinedSections from './CombinedSections';
import StreamSchedule from './StreamSchedule';

const affiliateLinks = [
  {
    id: 1,
    title: 'Gala Games',
    imageUrl: galaGames,
    linkUrl: 'http://classycrypto.com/galagames'
  },
  {
    id: 2,
    title: 'Gala Gold',
    imageUrl: galaGold,
    linkUrl: 'http://classycrypto.com/galagold'
  },
  {
    id: 3,
    title: 'Gala Music',
    imageUrl: galaMusic,
    linkUrl: 'http://classycrypto.com/galamusic'
  },
  {
    id: 4,
    title: 'Gala Film',
    imageUrl: galaFilm,
    linkUrl: 'http://classycrypto.com/galafilm'
  }
];

const MiddleSection = () => {
  return (
    <section className="middle-section">
      <BlockchainGrid className='blockchainElement' />
      
      <StreamSchedule />
      <CombinedSections />
    </section>
  );
}

export default MiddleSection;

/*

      <h2 className="section-title">Affiliate Links</h2>
      <div className="affiliate-links-container">
        {affiliateLinks.map((link) => ( 
          <Tilt key={link.id} className="Tilt affiliateBubbles" options={{ max: 25 }}>
            <a href={link.linkUrl} target="_blank" rel="noopener noreferrer">
              <img src={link.imageUrl} alt={link.title} className="affiliate-image" />
            </a>
          </Tilt>
        ))}
      </div>
      <p className='disclaimer'>
        By clicking on these links, a cookie will be set to acknowledge your visit through my referral. This simple action supports my efforts to deliver premium content and is greatly appreciated❤️
      </p>

*/