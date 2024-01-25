// src/components/SocialLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://twitter.com/jesusmartinez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} /> {/* Use FontAwesomeIcon component */}
      </a>
      <a href="https://youtube.com/jesusmartinez" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} /> {/* Use FontAwesomeIcon component */}
      </a>
      {/* Add more social links */}
    </div>
  );
}

export default SocialLinks;
