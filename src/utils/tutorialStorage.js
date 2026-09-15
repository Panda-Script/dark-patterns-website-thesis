// src/utils/tutorialStorage.js

const TUTORIAL_KEY = 'dark_patterns_tutorials';

export const loadTutorialData = () => {
    try {
        const saved = localStorage.getItem(TUTORIAL_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (error) {
        console.error('Error loading tutorial data:', error);
        return {};
    }
};

export const saveTutorialData = (data) => {
    try {
        localStorage.setItem(TUTORIAL_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving tutorial data:', error);
    }
};

export const clearTutorialData = () => {
    try {
        localStorage.removeItem(TUTORIAL_KEY);
    } catch (error) {
        console.error('Error clearing tutorial data:', error);
    }
};