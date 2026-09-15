// src/pages/OnboardingPage.jsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { avatars } from "../data/avatarData";
import { validateUsername } from "../utils/validation";
import './onboardingpage.css';

const OnboardingPage = () => {
    const { userData, updateUser } = useUser();
    const [step, setStep] = useState(1);  // 1 = username, 2 = avatar
    const [username, setUsername] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [error, setError] = useState('');

    // ============================================
    // STEP 1: Username
    // ============================================
    const handleUsernameSubmit = () => {
        const validation = validateUsername(username);
        
        if (!validation.valid) {
            setError(validation.message);
            return;
        }
        
        setError('');
        setStep(2);
    };

    // ============================================
    // STEP 2: Avatar
    // ============================================
    const handleAvatarSelect = (avatarId) => {
        setSelectedAvatar(avatarId);
    };

    const handleComplete = () => {
        if (!selectedAvatar) {
            setError('Please choose an avatar');
            return;
        }

        updateUser({
            displayName: username,
            avatar: selectedAvatar,
            onboardingComplete: true
        });
    };

    return (
        <div className="onboarding-page">
            <div className="onboarding-container">
                {/* Progress */}
                <div className="onboarding-progress">
                    <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                        <span className="step-number">1</span>
                        <span className="step-label">Username</span>
                    </div>
                    <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                        <span className="step-number">2</span>
                        <span className="step-label">Avatar</span>
                    </div>
                </div>

                {/* STEP 1: Username */}
                {step === 1 && (
                    <div className="onboarding-step">
                        <h2>Choose Your Username</h2>
                        <p className="step-description">
                            Your hero name will appear throughout the training.
                        </p>

                        <div className="input-group">
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your hero name..."
                                maxLength={20}
                                className={error ? 'error' : ''}
                            />
                            {error && <p className="error-message">{error}</p>}
                        </div>

                        <div className="warning-box">
                            <p>
                                <strong>Important:</strong> Do not use your real name
                                or any part of your name. Your username should not
                                directly identify you.
                            </p>
                        </div>

                        <button 
                            className="onboarding-btn"
                            onClick={handleUsernameSubmit}
                            disabled={!username.trim()}
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* STEP 2: Avatar */}
                {step === 2 && (
                    <div className="onboarding-step">
                        <h2>Choose Your Avatar</h2>
                        <p className="step-description">
                            This is how you'll appear in the Guild.
                        </p>

                        <div className="avatar-grid-large">
                            {avatars.map((avatar) => (
                                <div
                                    key={avatar.id}
                                    className={`avatar-option-large ${selectedAvatar === avatar.id ? 'selected' : ''}`}
                                    onClick={() => handleAvatarSelect(avatar.id)}
                                >
                                    <img src={avatar.image} alt={avatar.name} />
                                    <span className="avatar-name">{avatar.name}</span>
                                    {selectedAvatar === avatar.id && (
                                        <span className="selected-check">✓</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {error && <p className="error-message">{error}</p>}

                        <div className="button-row">
                            <button 
                                className="onboarding-btn secondary"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </button>
                            <button 
                                className="onboarding-btn"
                                onClick={handleComplete}
                                disabled={!selectedAvatar}
                            >
                                Begin Training
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OnboardingPage;