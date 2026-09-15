// src/uicomponents/GrimoireLayout.jsx
import React, { useState } from "react";
import './grimoire.css';

const GrimoireLayout = ({ children, activeTab, onTabChange, onClose }) => {
    const [pageTurn, setPageTurn] = useState(false);

    const tabs = [
        { id: 'profile', label: 'Profile' },
        { id: 'logs', label: 'Logs' },
        { id: 'badges', label: 'Badges' },
        { id: 'abilities', label: 'Abilities' }
    ];

    const handleTabClick = (tabId) => {
        setPageTurn(true);
        setTimeout(() => {
            onTabChange(tabId);
            setPageTurn(false);
        }, 300);
    };

    return (
        <div className="grimoire-container">
            <div className="grimoire-book open">
                <div className="grimoire-interior">
                    <div className="grimoire-layout">
                        {/* Vertical Tabs */}
                        <div className="grimoire-tabs-vertical">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-btn-vertical ${activeTab === tab.id ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                    data-tab={tab.id}
                                >
                                    <span className="tab-label">{tab.label}</span>
                                    <span className="tab-tab"></span>
                                </button>
                            ))}
                            <button 
                                className="tab-btn-vertical close-btn"
                                onClick={onClose}
                            >
                                ✕
                            </button>
                        </div>

                        <div className={`grimoire-page ${pageTurn ? 'turning' : ''}`}>
                            {children}
                        </div>

                        <div className="grimoire-footer">
                            <span>Page {activeTab === 'profile' ? '1' : 
                                     activeTab === 'logs' ? '2' : 
                                     activeTab === 'badges' ? '3' : '4'}</span>
                            <span>✦</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrimoireLayout;