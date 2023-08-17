import React, { useState } from 'react';
import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { modeSliceActions } from '../../store/mode-slice';

const Header = () => {
    const isDarkMode = useSelector(state => state.modeReducer.mode);
    const dispatch = useDispatch();

    const handleDarkMode = () => {
        window.localStorage.setItem('mode', 'dark');
        dispatch(modeSliceActions.switchDark('dark'));
    };

    const handleLightMode = () => {
        window.localStorage.setItem('mode', 'light');
        dispatch(modeSliceActions.switchDark('light'));
    };

    return (
        <header>
            <div className='header-logo'>
                <img src={senbay_logo} alt="senbay-logo" />
            </div>
            <div className='dark-light-wrap'>
                <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                    <FiSun />
                </div>
                <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
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