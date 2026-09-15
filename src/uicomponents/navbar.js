// src/uicomponents/navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import './uicomponents.css';

const Navbar = ({ onOpenGrimoire }) => {  // ← ADD prop
    const location = useLocation();
    const { userData } = useUser();

    const navLinks = [
        { name: 'Home', path: '/dashboard', key: 'home' },
        { name: 'Modules', path: '/modules', key: 'modules' },
        { 
            name: 'Grimoire', 
            key: 'grimoire',
            isGrimoire: true  // ← Flag to identify Grimoire link
        },
        { name: 'Badges', path: '/badges', key: 'badges' },
        { name: 'Profile', path: '/profile', key: 'profile' },
        { name: 'Surveys', path: '/surveys', key: 'surveys' },
        { name: 'Logout', path: '/logout', key: 'logout' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="nav-left">
                    <Link to="/dashboard" className="navbar-logo">
                        <span className="navbar-title">Dark Patterns</span>
                    </Link>
                </div>

                <div className="nav-right">
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.key} className={location.pathname === link.path ? 'active' : ''}>
                                {link.isGrimoire ? (
                                    // ← Grimoire uses onClick to open modal
                                    <span 
                                        className="nav-link clickable"
                                        onClick={onOpenGrimoire}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {link.name}
                                    </span>
                                ) : (
                                    <Link to={link.path}>{link.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;