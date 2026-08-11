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
import './uicomponents.css';

const HeroStatsCard = ({ userData }) => {
    //default data if userData is not provided
     const {
        displayName = 'Sam',
        level = 1,
        xp = 0,
        xpToNext = 50,
        title = 'Novice Defender',
        ability = 'Can identify basic dark patterns',
        avatar = null
    } = userData;

    //xp progess percentage
    const progressPercentage = Math.min((xp / xpToNext) * 100, 100);

    //Avatar image
    const getAvatar = () => {
        if (avatar) {
            return avatar;
        }
        else{
            return 'https://via.placeholder.com/100';
        }
    };
    const avatarImage = getAvatar();
    //based on the image they have in their profile, if they have none, use a placeholder image

    return (
        <div className="hero-stats-card">
        {//banner bar
        }
        <div className="hero-stats-banner">
        </div>

        {/*Avatar img*/}
        <div className="hero-stats-avatar">
            <img src={avatarImage} alt="Avatar" 
            className="avatar-image" />
        </div>

        {/*body of the card*/}
        <div className="hero-stats-body">
            <div className="name-level-container">
                <h2 className="hero-stats-username">{displayName}</h2>
                <span className="hero-stats-level">Level {level}</span>
            </div>
            
            <div className="title-ability-container">

                <h3 className="hero-stats-title">{title}</h3>
                
                <p className="hero-stats-ability">{ability}</p> 
            </div>

            <div className="progress-bar-container">
                <div className="Progress-bar-wrapper">
                    <div className="progress-bar">
                        <div className="progress-bar-fill" 
                        style={{ width: `${progressPercentage}%` }}>

                        </div>
                    </div>
                    <span className="progress-percentage">
                        {progressPercentage.toFixed(2)}%</span>
                </div>
                <span className="progress-text">{xp} / {xpToNext} XP</span>
                </div>
            </div>
        </div>
    );
    };

    export default HeroStatsCard;







