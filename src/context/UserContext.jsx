// src/context/UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadUserData, saveUserData, clearUserData } from '../utils/storage';
import { awardBadges } from '../utils/badgeChecker';
import { triggerConfetti } from '../utils/confetti';

const UserContext = createContext();

// Default data for new users
const createNewUserData = () => ({
    id: `user_${Date.now()}`,
    displayName: null,
    avatar: null,
    onboardingComplete: false,
    level: 1,
    xp: 0,
    xpToNext: 50,
    title: 'Novice Defender',
    ability: 'Can identify basic dark patterns',
    lessonsDone: 0,
    modulesDone: 0,
    badges: 0,
    earnedBadges: [],
    totalXP: 0,
    defeatedBosses: [],  // ← ADD THIS
    moduleProgress: {
        1: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 1 },
        2: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 3 },
        3: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 3 },
        4: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 3 },
        5: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 1 },
        6: { completed: false, progress: 0, lessonsCompleted: 0, totalLessons: 1 }
    },
    lessonProgress: {},
    storyProgress: {},
    quizHistory: [],
    combatHistory: [],
    currentStreak: 0,
    lastLoginDate: null,
    lastCompletedLesson: null,
    settings: {
        theme: 'dark',
        notifications: true,
        sound: false
    }
});

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newlyEarnedBadges, setNewlyEarnedBadges] = useState([]);

    // Load from localStorage on mount
    useEffect(() => {
        const saved = loadUserData();
        setUserData(saved || createNewUserData());
        setLoading(false);
    }, []);

    // Auto-save on change
    useEffect(() => {
        if (userData && !loading) {
            saveUserData(userData);
        }
    }, [userData, loading]);

    // Check and award badges
    const checkAndAwardBadges = (data) => {
         const { userData: updated, newlyEarned } = awardBadges(data);
    
    if (newlyEarned.length > 0) {
        setNewlyEarnedBadges(newlyEarned);
        
        // ✅ Trigger confetti when badges are earned
        setTimeout(() => triggerConfetti(), 100);
    }
        return updated;
    };

    // Update user
    const updateUser = (updates) => {
        setUserData(prev => {
            if (!prev) return prev;
            const merged = { ...prev, ...updates };
            return checkAndAwardBadges(merged);
        });
    };

    // Add XP
    const addXP = (amount) => {
        setUserData(prev => {
            if (!prev) return prev;
            
            const newXP = (prev.xp || 0) + amount;
            const newTotalXP = (prev.totalXP || 0) + amount;
            let newLevel = prev.level;
            let newXpToNext = prev.xpToNext;
            let newTitle = prev.title;
            let newAbility = prev.ability;
            
            if (newTotalXP >= 750 && prev.level < 5) {
                newLevel = 5;
                newXpToNext = 1000;
                newTitle = 'Elite Defender';
                newAbility = 'Master of all dark pattern detection';
            } else if (newTotalXP >= 500 && prev.level < 4) {
                newLevel = 4;
                newXpToNext = 750;
                newTitle = 'Digital Guardian';
                newAbility = 'Can spot urgency and scarcity tactics';
            } else if (newTotalXP >= 300 && prev.level < 3) {
                newLevel = 3;
                newXpToNext = 500;
                newTitle = 'Dark Pattern Hunter';
                newAbility = 'Can identify hidden costs and drip pricing';
            } else if (newTotalXP >= 150 && prev.level < 2) {
                newLevel = 2;
                newXpToNext = 300;
                newTitle = 'Pattern Spotter';
                newAbility = 'Can spot deceptive defaults in the wild';
            }
            
            const updated = {
                ...prev,
                xp: newXP,
                totalXP: newTotalXP,
                level: newLevel,
                xpToNext: newXpToNext,
                title: newTitle,
                ability: newAbility
            };
            
            return checkAndAwardBadges(updated);
        });
    };

    // Record quiz result
    const recordQuiz = (quizData) => {
        setUserData(prev => {
            if (!prev) return prev;
            const updated = {
                ...prev,
                quizHistory: [
                    ...(prev.quizHistory || []),
                    { ...quizData, timestamp: Date.now() }
                ]
            };
            return checkAndAwardBadges(updated);
        });
    };

    // Record combat result
    const recordCombat = (combatData) => {
        setUserData(prev => {
            if (!prev) return prev;
            const updated = {
                ...prev,
                combatHistory: [
                    ...(prev.combatHistory || []),
                    { ...combatData, timestamp: Date.now() }
                ]
            };
            return checkAndAwardBadges(updated);
        });
    };

    // ============================================
    // UNLOCK BOSS REWARD (NEW)
    // ============================================
    const unlockBossReward = (bossId) => {
        setUserData(prev => {
            if (!prev) return prev;
            
            const currentDefeated = prev.defeatedBosses || [];
            
            // Already defeated — don't add again
            if (currentDefeated.includes(bossId)) {
                return prev;
            }
            
            const updated = {
                ...prev,
                defeatedBosses: [...currentDefeated, bossId]
            };
            
            console.log(`🏆 Boss defeated: ${bossId} — New ability unlocked!`);
            
            return checkAndAwardBadges(updated);
        });
    };

    // Reset user
    const resetUser = () => {
        clearUserData();
        setUserData(createNewUserData());
        setNewlyEarnedBadges([]);
    };

    const value = {
        userData,
        loading,
        updateUser,
        addXP,
        recordQuiz,
        recordCombat,
        unlockBossReward,  // ← ADD THIS
        resetUser,
        newlyEarnedBadges,
        clearNewlyEarnedBadges: () => setNewlyEarnedBadges([])
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};