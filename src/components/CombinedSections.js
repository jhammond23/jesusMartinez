// CombinedSections.jsx
import React from 'react';
import r3wind from '../media/logo_2_4.png';
import l3gion from '../media/Discord_Server_Logo.jpg';

function CombinedSections() {
  return (
    <section id="combined-sections" className="section-combined">
        <h2 className="section-title">Media and Community</h2>
      <div className="container">
      <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={r3wind} alt="R3WIND" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />
            <img src={l3gion} alt="L3GION" className="circular-image" />

        <div className="columns">

          <div className="column newsletter">
            <h2>Stay Ahead of the Game with <span className='r3wind'>R3wind</span></h2>
            <p>Subscribe to R3wind Newsletter for cutting-edge insights, in-depth analysis, and exclusive content from the forefront of Crypto Gaming. Elevate your gaming experience and be part of the revolution.</p>
            <a href="https://r3wind.beehiiv.com/subscribe" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Join R3WIND Newsletter</a>


          </div>
          <div className="column discord">
            <h2>Join the Discord Community <span className='l3gion'>L3gion</span> </h2>
            <p>Step into a realm where gamers and crypto enthusiasts collide. The R3wind Discord is your gateway to connect with like-minded individuals, engage in vibrant discussions, and participate in exclusive community events. Don't miss out on the camaraderie – join the conversation today!</p>


            <a href="https://discord.com/invite/dFx4G4tWUB" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Join L3GION Discord</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CombinedSections;
