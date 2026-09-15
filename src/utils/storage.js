const STORAGE_KEY = 'dark_patterns_user_data';

const STORAGE_VERSION = '1.0.0';

//saving data to localSTorage
export const saveUserData = (userData) => {
    try {
        const dataToSave = {
            version: STORAGE_VERSION,
            timestamp: Date.now(),
            data: userData
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
        console.log('User Data successfully saved');
    
    } catch (error) {
        console.error('Error saving user data:', error);
    }
};

//loading the data
//i think this is almost exactly what i used for my dnd game, but different
export const loadUserData = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return null;

        const parsed = JSON.parse(saved);

        //version check
        //not the same version, no data
        if (parsed.version !== STORAGE_VERSION) {
            console.warn('Storage version does not match, the old data is being cleared');
            clearUserData();
            return null;
        }

        console.log('User Data Loaded.');
        return parsed.data;
    } catch (error) {
        //i love try and catch. that is the shit bro
        console.error('Error loading user data:', error);
    }
};

export const clearUserData = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        console.log('🗑️ User data cleared');
    } catch (error) {
        console.error('Error clearing user data:', error);
    }
};

//onboarding completed?
export const hasCompletedOnboarding = () => {
    const data = loadUserData();
    return data?.onboardingComplete || false;
};

