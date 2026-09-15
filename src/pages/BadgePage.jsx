// src/pages/BadgesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import BadgeCard from "../uicomponents/BadgeCard";
import { allBadges } from "../data/badgesData";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "../uicomponents/TutorialModal";
import '../uicomponents/badge.css';

const BadgePage = () => {
    const { userData } = useUser();
    const { showTutorial, closeTutorial } = useTutorialTrigger('badges');

    // Check which badges are earned
    const badgesWithStatus = allBadges.map((badge) => ({
        ...badge,
        isEarned: badge.checkEarned(userData)
    }));

    const earnedBadges = badgesWithStatus.filter(b => b.isEarned);
    const lockedBadges = badgesWithStatus.filter(b => !b.isEarned);

    const totalBadges = allBadges.length;
    const earnedCount = earnedBadges.length;
    const lockedCount = lockedBadges.length;
    const percentComplete = totalBadges > 0 ? Math.round((earnedCount / totalBadges) * 100) : 0;

    return (
        <div className="badges-page-grimoire">
            {/* Header */}
            <div className="badges-header-grimoire">
                <h2>Your Badges</h2>
                <p className="badges-subtitle">
                    Earn badges by completing lessons and quizzes
                </p>
            </div>

            {/* Stats Summary */}
            <div className="badges-stats-grimoire">
                <div className="stat-item-grimoire">
                    <span className="stat-number-grimoire">{earnedCount}</span>
                    <span className="stat-label-grimoire">Earned</span>
                </div>
                <div className="stat-item-grimoire">
                    <span className="stat-number-grimoire">{lockedCount}</span>
                    <span className="stat-label-grimoire">Locked</span>
                </div>
                <div className="stat-item-grimoire">
                    <span className="stat-number-grimoire">{totalBadges}</span>
                    <span className="stat-label-grimoire">Total</span>
                </div>
                <div className="stat-item-grimoire">
                    <span className="stat-number-grimoire">{percentComplete}%</span>
                    <span className="stat-label-grimoire">Complete</span>
                </div>
            </div>

            {/* Earned Badges */}
            {earnedBadges.length > 0 && (
                <div className="badges-section-grimoire">
                    <h3 className="section-title-grimoire">Earned Badges</h3>
                    <div className="badges-grid-grimoire">
                        {earnedBadges.map((badge) => (
                            <BadgeCard
                                key={badge.id}
                                badge={badge}
                                isEarned={true}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Locked Badges */}
            {lockedBadges.length > 0 && (
                <div className="badges-section-grimoire">
                    <h3 className="section-title-grimoire">Locked Badges</h3>
                    <div className="badges-grid-grimoire">
                        {lockedBadges.map((badge) => (
                            <BadgeCard
                                key={badge.id}
                                badge={badge}
                                isEarned={false}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Motivation */}
            <div className="badges-motivation-grimoire">
                <p>Complete more lessons and ace quizzes to unlock all badges!</p>
                <Link to="/modules" className="btn-grimoire">
                    Continue Learning
                </Link>
            </div>

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="badges"
                    onClose={closeTutorial}
                />
            )}
        </div>
    );
};

export default BadgePage;