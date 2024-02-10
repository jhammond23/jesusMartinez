import React from 'react';
import './BottomSection.css';
import BlockchainGrid from './BlockchainGrid';

const BottomSection = () => {
  return (
    <section className="bottom-section">
      <BlockchainGrid className='blockchainElement' />
      <div className="bottom-contact-container">
        <h2>Work with Jesus Martinez</h2>
        <p>
          Looking to propel your project in the Web3 gaming space? Collaborate with Jesus Martinez and make an impact in the gaming community.
        </p>
        <a href="/contact-me" className="collab-link collab-button">Contact Me</a>
      </div>
      <div className="media-assets-container">
        <h2>Media Assets</h2>
        <p>Access high-quality Jesus Martinez media assets to complement your content. Available for press and promotional use.</p>
        <a href="https://drive.google.com/drive/folders/1TebPYwdE_iyJNBJyzkf0woI0f4S3CFan?usp=sharing" className="media-folder-button">
          View Assets
        </a>
      </div>
    </section>
  );
};

export default BottomSection;
