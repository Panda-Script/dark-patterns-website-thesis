// src/utils/badgeChecker.js
import { allBadges } from '../data/badgesData';

// Check which badges should be earned (not yet awarded)
export const checkBadges = (userData) => {
    const earnedBadges = userData.earnedBadges || [];
    const newlyEarned = [];

    allBadges.forEach(badge => {
        // Skip if already earned
        if (earnedBadges.includes(badge.id)) return;

        // Check if user should earn this badge
        try {
            if (badge.checkEarned(userData)) {
                newlyEarned.push(badge);
            }
        } catch (error) {
            console.warn(`Error checking badge ${badge.id}:`, error);
        }
    });

    return newlyEarned;
};

// Award badges and return updated user data
export const awardBadges = (userData) => {
    const newlyEarned = checkBadges(userData);
    
    if (newlyEarned.length === 0) {
        return { userData, newlyEarned: [] };
    }

    const updatedData = {
        ...userData,
        earnedBadges: [
            ...(userData.earnedBadges || []),
            ...newlyEarned.map(b => b.id)
        ],
        badges: (userData.earnedBadges || []).length + newlyEarned.length
    };

    console.log(`🏅 Earned ${newlyEarned.length} new badge(s):`, newlyEarned.map(b => b.name));

    return { userData: updatedData, newlyEarned };
};