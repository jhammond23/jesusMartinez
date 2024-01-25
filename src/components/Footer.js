// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS for styling

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <p>© {new Date().getFullYear()} Jesus Martinez. All rights reserved.</p>
                {/* Add more footer content as needed */}
            </div>
        </footer>
    );
}

export default Footer;
