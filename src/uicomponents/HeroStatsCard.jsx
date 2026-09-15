//hero stat card
//avatar
//username
//level title
//ability description
//overall progress bar for the level
//props
//userTitle
//ability
//comppercentage
//level
import React from "react";
import "./uicomponents.css";
import dummyimage from "../dummyimage.png";
import { Gi3dHammer, GiCape } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";

const HeroStatsCard = ({ userData = {} }) => {

    const {
        displayName = "Sam",
        level = 1,
        xp = 0,
        xpToNext = 50,
        title = "Novice Defender",
        ability = "Can identify basic dark patterns",
        avatar = null,
        earnedBadges = ["First Steps", "Default Destroyer"]
    } = userData;

    const progressPercentage = Math.min(
        (xp / xpToNext) * 100,
        100
    );

    const avatarImage = avatar || dummyimage;

    const getLatestBadge = () => {
        if (earnedBadges && earnedBadges.length > 0) {
            return earnedBadges[earnedBadges.length - 1];
        }

        return null;
    };

    const getBadgeIcon = (badgeName) => {
        const badgeIcons = {
            "First Steps": <GiCape />,
            "Default Destroyer": <Gi3dHammer />
        };

        return badgeIcons[badgeName] || <AiFillApi />;
    };

    const latestBadge = getLatestBadge();
    const badgeIcon = latestBadge
        ? getBadgeIcon(latestBadge)
        : null;


    return (
        <div className="hero-stats-card">

            {/* Banner */}
            <div className="hero-stats-banner">

                <div className="hero-stats-avatar">
                    <img
                        src={avatarImage}
                        alt="Avatar"
                        className="avatar-image"
                    />
                </div>

                <div className="hero-stats-username">
                    {displayName}
                </div>

            </div>


            {/* Body */}
            <div className="hero-stats-body">

                {/* Level & Badge */}
                <div className="name-level-container">

                    <div className="level-badge-wrapper">

                        <span className="hero-stats-level">
                            Lvl. {level}
                        </span>

                        {latestBadge && (
                            <span
                                className="hero-stats-badge"
                                title={latestBadge}
                            >
                                {badgeIcon}
                                {latestBadge}
                            </span>
                        )}

                    </div>

                </div>


                {/* Title & Ability */}
                <div className="title-ability-container">

                    <h3 className="hero-stats-title">
                        {title}
                    </h3>

                    <p className="hero-stats-ability">
                        {ability}
                    </p>

                </div>


                {/* Progress */}
                <div className="progress-bar-container">

                    <div className="progress-bar-wrapper">

                        <div className="progress-bar">

                            <div
                                className="progress-bar-fill"
                                style={{
                                    width: `${progressPercentage}%`
                                }}
                            />

                        </div>

                        <span className="progress-percentage">
                            {progressPercentage.toFixed(0)}%
                        </span>

                    </div>

                    <span className="progress-text">
                        {xp} / {xpToNext} XP
                    </span>

                </div>

            </div>

        </div>
    );
};

export default HeroStatsCard;