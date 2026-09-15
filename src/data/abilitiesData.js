// src/data/abilitiesData.js

export const abilitiesData = [
    // ========================================
    // LEVEL 1 - Starting Abilities
    // ========================================
    { 
        id: 'novice-defender',
        level: 1, 
        title: 'Novice Defender', 
        ability: 'Can identify basic dark patterns',
        icon: '🛡️',
        damage: 20,
        unlocked: true,  // Level 1 is always unlocked
        unlockedByBoss: null  // Not tied to a boss
    },

    // ========================================
    // UNLOCKED BY DEFEATING BOSSES
    // ========================================
    { 
        id: 'deceptive-strike',
        level: 2, 
        title: 'Pattern Spotter', 
        ability: 'Can spot deceptive defaults in the wild',
        icon: '⚔️',
        damage: 25,
        unlockedByBoss: 'shadow-scout'  // ← Unlocked by defeating Shadow Scout
    },
    { 
        id: 'default-breaker',
        level: 3, 
        title: 'Dark Pattern Hunter', 
        ability: 'Can identify hidden costs and drip pricing',
        icon: '🔮',
        damage: 35,
        unlockedByBoss: 'default-destroyer'  // ← Unlocked by defeating Default Destroyer
    },
    { 
        id: 'cost-cutter',
        level: 4, 
        title: 'Digital Guardian', 
        ability: 'Can spot urgency and scarcity tactics',
        icon: '🗡️',
        damage: 45,
        unlockedByBoss: 'cost-collector'  // ← Unlocked by defeating Cost Collector
    },
    { 
        id: 'urgency-block',
        level: 5, 
        title: 'Elite Defender', 
        ability: 'Master of all dark pattern detection',
        icon: '⚡',
        damage: 55,
        unlockedByBoss: 'urgency-wraith'  // ← Unlocked by defeating Urgency Wraith
    },
    { 
        id: 'shadow-slash',
        level: 6, 
        title: 'Shadow Slayer', 
        ability: 'Can see through false trust',
        icon: '🌑',
        damage: 65,
        unlockedByBoss: 'shadow-agent'  // ← Unlocked by defeating Shadow Agent
    },
    { 
        id: 'master-strike',
        level: 7, 
        title: 'Legendary Defender', 
        ability: 'Master of every dark pattern',
        icon: '🌌',
        damage: 80,
        unlockedByBoss: 'shadow-lord'  // ← Unlocked by defeating Shadow Lord (final)
    }
];

// ============================================
// HELPER: Get all abilities with unlock status
// ============================================
export const getUserAbilities = (userLevel, defeatedBosses = []) => {
    return abilitiesData.map(ability => {
        // Check if unlocked by level OR by defeating a boss
        const unlockedByLevel = ability.level <= userLevel;
        const unlockedByDefeatingBoss = ability.unlockedByBoss 
            && defeatedBosses.includes(ability.unlockedByBoss);
        
        return {
            ...ability,
            unlocked: unlockedByLevel || unlockedByDefeatingBoss
        };
    });
};

// ============================================
// HELPER: Get the latest unlocked ability
// ============================================
export const getLatestAbility = (userLevel, defeatedBosses = []) => {
    const unlocked = getUserAbilities(userLevel, defeatedBosses)
        .filter(a => a.unlocked);
    return unlocked[unlocked.length - 1] || abilitiesData[0];
};

// ============================================
// HELPER: Get unlocked count
// ============================================
export const getUnlockedCount = (userLevel, defeatedBosses = []) => {
    return getUserAbilities(userLevel, defeatedBosses)
        .filter(a => a.unlocked).length;
};

// ============================================
// HELPER: Get ability unlocked by a specific boss
// ============================================
export const getAbilityFromBoss = (bossId) => {
    return abilitiesData.find(a => a.unlockedByBoss === bossId);
};