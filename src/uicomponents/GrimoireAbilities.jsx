// src/uicomponents/GrimoireAbilities.jsx
import React from "react";
import { useUser } from "../context/UserContext";
import { abilitiesData, getUserAbilities } from "../data/abilitiesData";
import './grimoire.css';

const GrimoireAbilities = () => {
    const { userData } = useUser();

    const userLevel = userData?.level || 1;
    const defeatedBosses = userData?.defeatedBosses || [];

    // Get all abilities with unlock status
    const allAbilities = getUserAbilities(userLevel, defeatedBosses);
    const unlockedCount = allAbilities.filter(a => a.unlocked).length;
    const totalCount = allAbilities.length;

    return (
        <div className="grimoire-abilities">
            <div className="abilities-header">
                <h3>All Abilities</h3>
                <span className="abilities-progress">{unlockedCount} / {totalCount} unlocked</span>
            </div>
            
            <div className="abilities-progress-bar">
                <div 
                    className="abilities-progress-fill" 
                    style={{ width: `${(unlockedCount / totalCount) * 100}%` }} 
                />
            </div>

            <div className="abilities-list">
                {allAbilities.map((ability) => (
                    <div 
                        key={ability.id}
                        className={`ability-item ${ability.unlocked ? 'unlocked' : 'locked'}`}
                    >
                        <div className="ability-level">
                            {ability.icon} Lv.{ability.level}
                        </div>
                        <div className="ability-info">
                            <div className="ability-title">{ability.title}</div>
                            <div className="ability-desc">{ability.ability}</div>
                        </div>
                        <div className="ability-status">
                            {ability.unlocked ? 'Unlocked' : 'Locked'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrimoireAbilities;