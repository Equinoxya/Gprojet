import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list-left">
                <li className="navbar-item"><a href="#home"><p>. . .</p>ABONNEMENTS</a></li>
                <li className="navbar-item"><a href="#about"><p>. . .</p>POSES REFERENCES</a></li>
                <li className="navbar-item"><a href="#services"><p>. . .</p>MON UNIVERS</a></li>
            </ul>
            <img className="logo-bhaal" src="/images/bhaal-logo.png" alt="Logo de Bhaal" />
            <ul className="navbar-list-right">
                <li className="navbar-item"><a href="#portfolio"><p>. . .</p>THE UNHOLY SIDE</a></li>
                <li className="navbar-item"><a href="#contact"><p>. . .</p>ME CONTACTER</a></li>
                <li className="navbar-item"><a href="#blog"><p>. . .</p>MON SHOP</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;