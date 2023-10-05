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
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import close from '../../assets/images/close.png';
import close_dark from '../../assets/images/close-dark.png';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [showDrop,setShowDrop] = useState(false);

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

    const handleShowDropdown = () => {
        setShowDrop(prev => !prev);
    };
    
    return (
        <div className='header-section'>
            <header className='container header-container'>
                <div className='header-logo'>
                    {!isMenuOpen && <Link to='/'><img src={isDarkMode === 'dark' ? senbay_logo_dark : senbay_logo} alt="senbay-logo" /></Link>}
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
                    {/* {isMenuOpen && <ul className={isDarkMode === 'dark' && 'open-menu-ul'}>
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
                            <Link onClick={handleCloseMenu} to="/">
                                ƏSAS SƏHİFƏ
                            </Link>
                        </li>
                        <li className='about-li-wrap' onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
                            <div className="about-div" to="/about/history">
                                HAQQIMIZDA
                            </div>
                            {showDrop && (
                                <li className='about-dropdown'>
                                    <div>
                                        <Link onClick={handleCloseMenu} to="/about/history">
                                            TARİXÇƏ
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/about/mission">
                                            MİSSİYA VƏ VİZYON
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/about/politics">
                                            ŞİRKƏT SİYASƏTİMİZ
                                        </Link>
                                    </div>
                                    <div>
                                        <Link onClick={handleCloseMenu} to="/about/directors-board">
                                            İDARƏ HEYƏTİ
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/">
                                            RƏHBƏRİN MESAJI
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/">
                                            QRUP ŞİRKƏTLƏRİ
                                        </Link>
                                    </div>
                                    <div>
                                        <Link onClick={handleCloseMenu} to="/about/awards">
                                            MÜKAFAT VƏ UĞURLAR
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/about/certificat">
                                            ÜZVLÜK VƏ SERTİFİKATLAR
                                        </Link>
                                        <Link onClick={handleCloseMenu} to="/about/founder">
                                            QURUCULARIMIZ
                                        </Link>
                                    </div>
                                </li>
                            )}
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/">
                                FƏALİYYƏT SAHƏLƏRİ
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/projects">
                                LAYİHƏLƏR
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/">
                                SOSİAL MƏSULİYYƏT
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/news">
                                XƏBƏRLƏR
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/contact">
                                ƏLAQƏ
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleCloseMenu} to="/">
                                AZ
                            </Link>
                        </li>
                    </ul>} */}
                    <div className={isMenuOpen ? "desktop-menu-bar" : "desktop-menu-bar  close-menu-bar"}>
                        <div className="desktop-close-icon" onClick={handleCloseMenu}>
                            <img src={isDarkMode === 'dark' ? close_dark : close} alt="close-icon" />
                        </div>
                        <div className='desktop-navbar-top row'>
                            <div className="col-12 px-0 mobile-navbar-top">
                                <Link to='/' onClick={handleCloseMenu}>
                                    <img className="mobile-senbay-logo" src={isDarkMode === 'dark' ? senbay_logo_dark : senbay_logo} alt="senbay-logo" />
                                </Link>
                                <div className={!isMenuOpen ? 'd-none' : 'dark-light-wrap'}>
                                    <div onClick={handleLightMode} className={isDarkMode === 'dark' ? 'light-icon' : 'light-icon mode-active'}>
                                        <FiSun />
                                    </div>
                                    <div onClick={handleDarkMode} className={isDarkMode === 'dark' ? 'dark-icon mode-active' : 'dark-icon'}>
                                        <BsMoon />
                                    </div>
                                </div>
                                <div className="close-icon" onClick={handleCloseMenu}>
                                    <img src={isDarkMode === 'dark' ? close_dark : close} alt="close-icon" />
                                </div>
                            </div>
                            <ul className='col-lg-8 padding-ul'>
                                <li>
                                    <Link to='/' onClick={handleCloseMenu}>
                                        ƏSAS SƏHİFƏ
                                    </Link>
                                </li>
                                <div className='desktop-about-wrap'>
                                    <li className='desktop-about-li' onClick={handleShowDropdown}>
                                        <div>
                                            HAQQIMIZDA
                                            {!showDrop ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
                                        </div>
                                    </li>
                                    {showDrop && (
                                        <div className='desktop-dropdown-menu'>
                                            <Link onClick={handleCloseMenu} to="/about/history">TARIXÇƏ</Link>
                                            <Link onClick={handleCloseMenu} to="/about/mission">MİSSİYA VƏ VİZYON</Link>
                                            <Link onClick={handleCloseMenu} to="/about/politics">ŞİRKƏT SİYASƏTİMİZ</Link>
                                            <Link onClick={handleCloseMenu} to="/about/directors-board">İDARƏ HEYƏTİ</Link>
                                            <Link onClick={handleCloseMenu} to="/">RƏHBƏRİN MESAJI</Link>
                                            <Link onClick={handleCloseMenu} to="/">QRUP ŞİRKƏTLƏRİ</Link>
                                            <Link onClick={handleCloseMenu} to="/about/awards">MÜKAFAT VƏ UĞURLAR</Link>
                                            <Link onClick={handleCloseMenu} to="/about/certificat">ÜZVLÜK VƏ SERTİFİKATLAR</Link>
                                            <Link onClick={handleCloseMenu} to="/about/founder">QURUCULARIMIZ</Link>
                                        </div>
                                    )}
                                </div>
                                <li>
                                    <Link onClick={handleCloseMenu} to='/activity'>
                                        FƏALİYYƏT SAHƏLƏRİ
                                    </Link>
                                </li>
                                <li>
                                    <div onClick={handleCloseMenu}>
                                        LAYİHƏLƏR
                                        <MdKeyboardArrowRight />
                                    </div>
                                </li>
                                <li>
                                    <Link onClick={handleCloseMenu} to='/social-responsibility'>
                                        SOSİAL MƏSULİYYƏT
                                    </Link>
                                </li>
                            </ul>
                            <div className='col-lg-4 contact-phone-numbers'>
                                <span>
                                    <SlLocationPin />
                                    Anıttepe Məh. Işık küç. No: 20 Çankaya/Ankara
                                </span>
                                <span>
                                    <BiPhone />
                                    +90(312) 229 08 08
                                </span>
                                <span>
                                    <BiPhone />
                                    +90(312) 229 00 10
                                </span>
                                <span>
                                    <AiOutlineMail />
                                    info@bayburtgrup.com.tr
                                </span>
                            </div>
                        </div>
                        <div className='desktop-navbar-bottom'>
                            <img src={isDarkMode === 'dark' ? senbay_logo_dark : senbay_logo} alt="senbay-logo" />
                            <Link to="/contact" onClick={handleCloseMenu}>
                                <p>ƏLAQƏ</p>  
                                <MdKeyboardArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className={(isDarkMode === 'light' && isMenuOpen) ? 'menu-icon active-menu-icon' : 'menu-icon'} onClick={handleMenuBar}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;