import React, { useState } from 'react';
import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);

    const handleDarkMode = () => {
        if(isDarkMode){
            return;
        }else{
            setIsDarkMode(true);
            window.localStorage.setItem('DARK', true);
        }
    };

    const handleLightMode = () => {
        if(!isDarkMode){
            return;
        }else{
            setIsDarkMode(false);
            window.localStorage.setItem('DARK', false);
        }
    };

    return (
        <header>
            <div className='header-logo'>
                <img src={senbay_logo} alt="senbay-logo" />
            </div>
            <div className='dark-light-wrap'>
                <div onClick={handleLightMode} className={isDarkMode ? 'light-icon' : 'light-icon mode-active'}>
                    <FiSun />
                </div>
                <div onClick={handleDarkMode} className={isDarkMode ? 'dark-icon mode-active' : 'dark-icon'}>
                    <BsMoon />
                </div>
            </div>
            <div className='menu-icon'>
                <GiHamburgerMenu />
            </div>
        </header>
    );
};

export default Header;