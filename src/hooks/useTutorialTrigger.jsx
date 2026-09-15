// src/hooks/useTutorialTrigger.js
import { useState, useEffect } from 'react';
import { useTutorial } from '../context/TutorialContext';

export const useTutorialTrigger = (tutorialId) => {
    const { hasSeenTutorial } = useTutorial();
    const [showTutorial, setShowTutorial] = useState(false);

    useEffect(() => {
        if (!hasSeenTutorial(tutorialId)) {
            // Small delay so the page can render first
            const timer = setTimeout(() => {
                setShowTutorial(true);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [tutorialId, hasSeenTutorial]);

    return {
        showTutorial,
        closeTutorial: () => setShowTutorial(false)
    };
};
