import React from 'react';
import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header>
        <div className='header-logo'>
            <img src={senbay_logo} alt="senbay-logo" />
        </div>
        <div className='dark-light-wrap'>
            <div className='light-icon'>
                <FiSun />
            </div>
            <div className='dark-icon'>
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