// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS for styling

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className='header-logo'>Jesus Martinez</h1>
                <nav className="header-nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                    {/* Add more navigation links as needed */}
                </nav>
            </div>
        </header>
    );
}

export default Header;
