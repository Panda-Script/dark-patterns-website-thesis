// src/context/TutorialContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadTutorialData, saveTutorialData, clearTutorialData } from '../utils/tutorialStorage';

const TutorialContext = createContext();

export const TutorialProvider = ({ children }) => {
    const [seenTutorials, setSeenTutorials] = useState({});

    // Load from localStorage on mount
    useEffect(() => {
        const saved = loadTutorialData();
        setSeenTutorials(saved || {});
    }, []);

    // Save when changed
    useEffect(() => {
        saveTutorialData(seenTutorials);
    }, [seenTutorials]);

    // Check if user has seen a tutorial
    const hasSeenTutorial = (tutorialId) => {
        return seenTutorials[tutorialId] === true;
    };

    // Mark tutorial as seen
    const markTutorialAsSeen = (tutorialId) => {
        setSeenTutorials(prev => ({ ...prev, [tutorialId]: true }));
    };

    // Reset all tutorials (for testing or user preference)
    const resetTutorials = () => {
        clearTutorialData();
        setSeenTutorials({});
    };

    const value = {
        hasSeenTutorial,
        markTutorialAsSeen,
        resetTutorials
    };

    return (
        <TutorialContext.Provider value={value}>
            {children}
        </TutorialContext.Provider>
    );
};

export const useTutorial = () => {
    const context = useContext(TutorialContext);
    if (!context) {
        throw new Error('useTutorial must be used within a TutorialProvider');
    }
    return context;
};