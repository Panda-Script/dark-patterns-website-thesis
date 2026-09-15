// src/uicomponents/GrimoireProfile.jsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { avatars, getAvatarUrl } from "../data/avatarData";
import { abilitiesData, getLatestAbility, getUnlockedCount } from "../data/abilitiesData";
import './grimoire.css';

const GrimoireProfile = () => {
    const { userData, updateUser } = useUser();
    const [showAvatarPicker, setShowAvatarPicker] = useState(false);

    if (!userData) return <div>Loading...</div>;

    const currentAvatar = getAvatarUrl(userData.avatar);
    const userLevel = userData?.level || 1;

    // Get the latest unlocked ability
    const latestAbility = getLatestAbility(userLevel);
    const unlockedCount = getUnlockedCount(userLevel);
    const totalCount = abilitiesData.length;

    return (
        <div className="grimoire-profile">
            {/* Avatar Section */}
            <div className="profile-avatar-section">
                <div
                    className="profile-avatar-large"
                    onClick={() => setShowAvatarPicker(true)}
                >
                    <img src={currentAvatar} alt="Avatar" />
                    <div className="avatar-edit-hint">Click to change</div>
                </div>
                <h2 className="profile-name">{userData.displayName}</h2>
                <p className="profile-title">{userData.title}</p>
            </div>

            {/* Level and XP Section */}
            <div className="profile-level-section">
                <div className="level-row">
                    <span>Level {userData.level}</span>
                    <span>{userData.xp} / {userData.xpToNext} XP</span>
                </div>
                <div className="level-bar">
                    <div className="level-fill" style={{
                        width: `${(userData.xp / userData.xpToNext) * 100}%`
                    }} />
                </div>
            </div>

            {/* Stats Section */}
            <div className="profile-stats-grid">
                <div className="stat-box">
                    <span className="stat-number">{userData.totalXP}</span>
                    <span className="stat-label">Total XP</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">{userData.lessonsDone}</span>
                    <span className="stat-label">Lessons</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">{userData.modulesDone}</span>
                    <span className="stat-label">Modules</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">{userData.badges}</span>
                    <span className="stat-label">Badges</span>
                </div>
            </div>

            {/* Latest Ability Earned */}
            <div className="profile-ability-earned">
                <h4>Latest Ability Earned</h4>
                <div className="ability-earned-display">
                    <div className="ability-earned-icon">✦</div>
                    <div className="ability-earned-info">
                        <p className="ability-earned-name">{latestAbility.title}</p>
                        <p className="ability-earned-desc">{latestAbility.ability}</p>
                        <p className="ability-earned-level">Unlocked at Level {latestAbility.level}</p>
                    </div>
                </div>

                <div className="ability-progress-summary">
                    <span className="unlocked-count">{unlockedCount} / {totalCount} abilities unlocked</span>
                    <button
                        className="view-all-abilities-link"
                        onClick={() => {
                            const abilitiesTab = document.querySelector('.tab-btn-vertical[data-tab="abilities"]');
                            if (abilitiesTab) abilitiesTab.click();
                        }}
                    >
                        View All Abilities
                    </button>
                </div>
            </div>

            {/* Avatar Picker Modal */}
            {showAvatarPicker && (
                <div className="modal-overlay" onClick={() => setShowAvatarPicker(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Choose Your Avatar</h3>
                        <div className="avatar-grid-small">
                            {avatars.map((av) => (
                                <div
                                    key={av.id}
                                    className={`avatar-option ${userData.avatar === av.id ? 'selected' : ''}`}
                                    onClick={() => {
                                        updateUser({ avatar: av.id });
                                        setShowAvatarPicker(false);
                                    }}
                                >
                                    <img src={av.image} alt={av.name} />
                                    <span>{av.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GrimoireProfile;