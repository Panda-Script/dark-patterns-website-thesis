// src/uicomponents/GrimoireModal.jsx
import React, { useState, useEffect } from "react";
import GrimoireLayout from "./GrimoireLayout";
import GrimoireProfile from "./GrimoireProfile";
import GrimoireArchive from "./GrimoireArchive";
import GrimoireAbilities from "./GrimoireAbilities";
import BadgesPage from "../pages/BadgePage";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "./TutorialModal";
import './grimoiremodal.css';

const GrimoireModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isClosing, setIsClosing] = useState(false);
    const { showTutorial, closeTutorial } = useTutorialTrigger('grimoire');

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen && !isClosing) return null;

    const renderContent = () => {
        switch(activeTab) {
            case 'profile':
                return <GrimoireProfile />;
            case 'archive':
                return <GrimoireArchive />;
            case 'badges':
                return <BadgesPage />;
            case 'abilities':
                return <GrimoireAbilities />;
            default:
                return <GrimoireProfile />;
        }
    };

    return (
        <div
            className={`grimoire-overlay ${isClosing ? 'closing' : ''}`}
            onClick={handleClose}
        >
            <div
                className={`grimoire-modal ${isClosing ? 'closing' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <GrimoireLayout
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    onClose={handleClose}
                >
                    {renderContent()}
                </GrimoireLayout>
            </div>

            {/* Tutorial - only when modal is open */}
            {showTutorial && isOpen && (
                <TutorialModal
                    tutorialId="grimoire"
                    onClose={closeTutorial}
                />
            )}
        </div>
    );
};

export default GrimoireModal;