//nav bar layout
//gradient bar
//title dark patterns adjacent
//logo somewhere
//home
//lessons
//badges
//profile
//ask them to fill ut the surveys
//logout
import React from "react";
import { Link, useLocation } from "react-router-dom";
import './uicomponents.css';

const Navbar = () => {
    const location = useLocation();


    const navLinks = [
        { name: 'Home', path: '/dashboard' },
        { name: 'Lessons', path: '/lessons' },
        { name: 'Badges', path: '/badges' },
        { name: 'Profile', path: '/profile' },
        { name: 'Surveys', path: '/surveys' },
        { name: 'Logout', path: '/logout' }
    ];

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="nav-left">
                <Link to="/dashboard" className="navbar-logo">
                    <img src="https://www.bing.com/images/search?view=detailV2&ccid=iWIEidVo&id=D8445DCDD5E931234924FEBBBF261250C7433087&thid=OIP.iWIEidVomFA1iDjwsqxv6wHaHa&mediaurl=https%3a%2f%2fimg.lovepik.com%2ffree-png%2f20211105%2flovepik-flat-icon-design-png-image_400305590_wh1200.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.89620489d5689850358838f0b2ac6feb%3frik%3dhzBDx1ASJr%252b7%252fg%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=placeholder+image&mode=overlay&FORM=IQFRBA&ck=3FCFF9E938DD7F15776D7BE0BC8ACE25&selectedIndex=0&idpp=serp&ajaxhist=0&ajaxserp=0" 
                    alt="Logo" 
                    className="logo-image"/>
                    <span className="navbar-title">Dark Patterns</span>
                </Link>
            </div>

        <div className="nav-right">
            <ul className="navbar-links">
                {navLinks.map((link) => (
                    <li key={link.name} className={location.pathname === link.path ? 'active' : ''}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    </nav>
);
}

export default Navbar;