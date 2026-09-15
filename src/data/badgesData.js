// src/data/badgesData.js

export const allBadges = [
    // ========================================
    // BEGINNER BADGES
    // ========================================
    {
        id: 'first-steps',
        name: 'First Steps',
        description: 'Complete your first lesson',
        icon: '🌟',
        color: 'bronze',
        category: 'beginner',
        // Check if user has earned this badge
        checkEarned: (userData) => {
            return (userData.lessonsDone || 0) >= 1;
        }
    },
    {
        id: 'dedicated-learner',
        name: 'Dedicated Learner',
        description: 'Complete 5 lessons',
        icon: '📚',
        color: 'silver',
        category: 'progress',
        checkEarned: (userData) => {
            return (userData.lessonsDone || 0) >= 5;
        }
    },
    {
        id: 'dark-pattern-master',
        name: 'Dark Pattern Master',
        description: 'Complete all 10 lessons',
        icon: '🏆',
        color: 'gold',
        category: 'master',
        checkEarned: (userData) => {
            return (userData.lessonsDone || 0) >= 10;
        }
    },

    // ========================================
    // MODULE BADGES
    // ========================================
    {
        id: 'default-destroyer',
        name: 'Default Destroyer',
        description: 'Complete Module 1',
        icon: '⚔️',
        color: 'bronze',
        category: 'module',
        checkEarned: (userData) => {
            return userData.moduleProgress?.[1]?.completed === true;
        }
    },
    {
        id: 'hidden-cost-hunter',
        name: 'Hidden Cost Hunter',
        description: 'Complete Module 2',
        icon: '💰',
        color: 'silver',
        category: 'module',
        checkEarned: (userData) => {
            return userData.moduleProgress?.[2]?.completed === true;
        }
    },
    {
        id: 'urgency-expert',
        name: 'Urgency Expert',
        description: 'Complete Module 3',
        icon: '⏰',
        color: 'silver',
        category: 'module',
        checkEarned: (userData) => {
            return userData.moduleProgress?.[3]?.completed === true;
        }
    },
    {
        id: 'final-defender',
        name: 'Final Defender',
        description: 'Complete Module 4',
        icon: '🛡️',
        color: 'gold',
        category: 'module',
        checkEarned: (userData) => {
            return userData.moduleProgress?.[4]?.completed === true;
        }
    },

    // ========================================
    // QUIZ BADGES
    // ========================================
    {
        id: 'quiz-master',
        name: 'Quiz Master',
        description: 'Pass 5 quizzes',
        icon: '📝',
        color: 'silver',
        category: 'progress',
        checkEarned: (userData) => {
            const passedQuizzes = userData.quizHistory?.filter(q => q.passed).length || 0;
            return passedQuizzes >= 5;
        }
    },
    {
        id: 'perfect-score',
        name: 'Perfect Score',
        description: 'Get 100% on a quiz',
        icon: '🎯',
        color: 'gold',
        category: 'master',
        checkEarned: (userData) => {
            return userData.quizHistory?.some(q => q.score === 100) || false;
        }
    },

    // ========================================
    // COMBAT BADGES
    // ========================================
    {
        id: 'combat-veteran',
        name: 'Combat Veteran',
        description: 'Win 3 battles',
        icon: '⚔️',
        color: 'silver',
        category: 'combat',
        checkEarned: (userData) => {
            const wins = userData.combatHistory?.filter(c => c.victory).length || 0;
            return wins >= 3;
        }
    },
    {
        id: 'boss-slayer',
        name: 'Boss Slayer',
        description: 'Defeat all 4 bosses',
        icon: '💀',
        color: 'gold',
        category: 'combat',
        checkEarned: (userData) => {
            const bossesDefeated = userData.combatHistory?.filter(c => c.victory && c.isBoss).length || 0;
            return bossesDefeated >= 4;
        }
    },

    // ========================================
    // STORY BADGES
    // ========================================
    {
        id: 'story-seeker',
        name: 'Story Seeker',
        description: 'Complete all story chapters',
        icon: '📖',
        color: 'silver',
        category: 'story',
        checkEarned: (userData) => {
            const chaptersCompleted = Object.keys(userData.storyProgress || {}).length;
            return chaptersCompleted >= 8;
        }
    },

    // ========================================
    // SPECIAL BADGES
    // ========================================
    {
        id: 'streak-starter',
        name: 'Streak Starter',
        description: 'Maintain a 7-day login streak',
        icon: '🔥',
        color: 'gold',
        category: 'special',
        checkEarned: (userData) => {
            return (userData.currentStreak || 0) >= 7;
        }
    },
    {
        id: 'legendary-defender',
        name: 'Legendary Defender',
        description: 'Earn all other badges',
        icon: '👑',
        color: 'legendary',
        category: 'master',
        checkEarned: (userData) => {
            const earned = userData.earnedBadges || [];
            // Count all other badges (exclude this one)
            const otherBadges = allBadges.filter(b => b.id !== 'legendary-defender');
            return otherBadges.every(b => earned.includes(b.id));
        }
    }
];

// Helper: Get badge by ID
export const getBadgeById = (badgeId) => {
    return allBadges.find(b => b.id === badgeId);
};

// Helper: Get badges by category
export const getBadgesByCategory = (category) => {
    return allBadges.filter(b => b.category === category);
};

// Helper: Get earned badges
export const getEarnedBadges = (userData) => {
    return allBadges.filter(b => b.checkEarned(userData));
};

// Helper: Get locked badges
export const getLockedBadges = (userData) => {
    return allBadges.filter(b => !b.checkEarned(userData));
};