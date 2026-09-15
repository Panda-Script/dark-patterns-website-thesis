// src/data/enemyData.js
export const enemies = {
    'shadow-scout': {
        id: 'shadow-scout',
        name: 'Shadow Scout',
        avatar: '/images/enemies/shadow-scout.png',
        maxHP: 60,
        attackPower: 8,
        description: 'A low-level scout of E.V. Inc. Llc',
        moduleId: 1,
        reward: 'deceptive-strike'
    },
    'default-destroyer': {
        id: 'default-destroyer',
        name: 'Default Destroyer',
        avatar: '/images/enemies/default-destroyer.png',
        maxHP: 80,
        attackPower: 12,
        description: 'Master of visual manipulation',
        moduleId: 2,
        reward: 'default-breaker'
    },
    'cost-collector': {
        id: 'cost-collector',
        name: 'Cost Collector',
        avatar: '/images/enemies/cost-collector.png',
        maxHP: 100,
        attackPower: 15,
        description: 'Collector of hidden fees and buried terms',
        moduleId: 3,
        reward: 'cost-cutter'
    },
    'urgency-wraith': {
        id: 'urgency-wraith',
        name: 'Urgency Wraith',
        avatar: '/images/enemies/urgency-wraith.png',
        maxHP: 120,
        attackPower: 18,
        description: 'Master of fake urgency and pressure',
        moduleId: 4,
        reward: 'urgency-block'
    },
    'shadow-agent': {
        id: 'shadow-agent',
        name: 'Shadow Agent',
        avatar: '/images/enemies/shadow-agent.png',
        maxHP: 140,
        attackPower: 20,
        description: 'Elite agent and master of false trust',
        moduleId: 5,
        reward: 'master-strike'
    },
    'shadow-lord': {
        id: 'shadow-lord',
        name: 'Shadow Lord',
        avatar: '/images/enemies/shadow-lord.png',
        maxHP: 180,
        attackPower: 25,
        description: 'The final boss of E.V. Inc. Llc',
        moduleId: 6,
        reward: 'master-spell'
    }
};

export const getEnemyByModule = (moduleId) => {
    return Object.values(enemies).find(e => e.moduleId === moduleId);
};

export const getFinalBoss = () => enemies['shadow-lord'];