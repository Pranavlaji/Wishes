import React from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">wishes.</div>

            <button className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            <nav className={`side-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#why-us" onClick={closeMenu}>Benefits</a></li>
                    <li><a href="#works" onClick={closeMenu}>Work</a></li>
                    <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
