import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import senbay_logo_dark from '../../assets/images/bayburt_logo_dark.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { modeSliceActions } from '../../store/mode-slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import close from '../../assets/images/close.png';
import close_dark from '../../assets/images/close-dark.png';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

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

    const handleMenuBar = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className='container'>
            <div className='header-logo'>
                <Link to='/'><img src={isDarkMode === 'dark' ? senbay_logo_dark : senbay_logo} alt="senbay-logo" /></Link>
            </div>
            <div className={isMenuOpen ? 'd-none' : 'dark-light-wrap'}>
                <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                    <FiSun />
                </div>
                <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
                    <BsMoon />
                </div>
            </div>
            <div className='open-menu-link'>
                {isMenuOpen && <ul className={isDarkMode === 'dark' && 'open-menu-ul'}>
                <div className='close-icon' onClick={handleCloseMenu}>
                    <img src={isDarkMode === 'dark' ? close_dark : close} alt="close" />
                </div>
                <div className='dark-light-wrap mobile-dark-light'>
                    <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                        <FiSun />
                    </div>
                    <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
                        <BsMoon />
                    </div>
                </div>
                    <li>
                        <Link to="/">
                            ƏSAS SƏHİFƏ
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/history">
                            HAQQIMIZDA
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            FƏALİYYƏT SAHƏLƏRİ
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            LAYİHƏLƏR
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            SOSİAL MƏSULİYYƏT
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            XƏBƏRLƏR
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            ƏLAQƏ
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            AZ
                        </Link>
                    </li>
                </ul>}
                <div className={(isDarkMode === 'light' && isMenuOpen) ? 'menu-icon active-menu-icon' : 'menu-icon'} onClick={handleMenuBar}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;