import React from 'react';
import './Logo.scss'
import logo from './images/logo.png'

const Logo = () => {
    return (
        <div className="AppLogo">
            <img src={logo} className="ImagemLogo" />
            <span className="LetraK">K</span>
            <span className="LetraL">l</span>
            <span className="LetraA">a</span>
            <span className="LetraV">v</span>
        </div>
    );
}

export default Logo