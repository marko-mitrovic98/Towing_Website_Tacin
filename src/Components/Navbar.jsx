import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img className="navbar-logo" src="/assets/logo.png" alt="slep sluzba tacin logo" />
                </Link>
                <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                    <li>
                        <Link to="/" className="navLink">
                            Početna
                        </Link>
                    </li>
                    <li>
                        <Link to="/slep-sluzba" className="navLink">
                            Šlep služba
                        </Link>
                    </li>
                    <li>
                        <Link to="/transport-masina" className="navLink">
                            Transport mašina
                        </Link>
                    </li>
                    <li>
                        <Link to="/cesta-pitanja" className="navLink">
                            česta pitanja
                        </Link>
                    </li>
                    <li>
                        <Link to="/o-nama" className="navLink">
                            o nama
                        </Link>
                    </li>
                    <li>
                        <Link to="/istorija" className="navLink">
                            istorija
                        </Link>
                    </li>
                    <li>
                        <Link to="/galerija" className="navLink">
                            galerija
                        </Link>
                    </li>
                    <li>
                        <Link to="/kontakt" className="navLink">
                            kontakt
                        </Link>
                    </li>
                </ul>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};
