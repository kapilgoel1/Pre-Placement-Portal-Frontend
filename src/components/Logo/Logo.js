import React from 'react';
import logo from '../../assets/JIMSLogo.png';
import './Logo.css';

//This is the main logo of JIMS

const Logo = () => {
    return (
        <>
            <img className="logo" src={logo} height="140px" alt="Jims Logo" align="left" />
        </>
    );
}

export default Logo;

