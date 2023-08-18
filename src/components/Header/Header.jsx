import './Header.css';
import senbay_logo from '../../assets/images/senbay_logo.svg';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { modeSliceActions } from '../../store/mode-slice';
import { Link } from 'react-router-dom';

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
            <div className='open-menu-link'>
                <ul>
                    <li>
                        <Link to="/">
                            ƏSAS SƏHİFƏ
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            HAQQIMIZDA
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            FƏALİYYƏT SAHƏLƏRİ
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
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
                </ul>
                <div className='menu-icon'>
                    <GiHamburgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;