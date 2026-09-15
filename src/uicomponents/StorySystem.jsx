// src/uicomponents/StorySystem.jsx
import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { storyData } from "../data/storyData";
import CombatSystem from "./CombatSystem";
import { triggerConfetti } from "../utils/confetti";
import './storysystem.css';

const StorySystem = ({ chapterId, moduleId, onComplete }) => {
    const { userData, addXP } = useUser();
    const [currentScene, setCurrentScene] = useState(null);
    const [sceneHistory, setSceneHistory] = useState([]);
    const [showChoices, setShowChoices] = useState(false);
    const [chapterComplete, setChapterComplete] = useState(false);
    const [xpEarned, setXpEarned] = useState(0);

    // Combat state
    const [combatEnemy, setCombatEnemy] = useState(null);

    // Typewriter state
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const chapter = storyData.chapters.find(c => c.id === chapterId);

    // Initialize first scene
    useEffect(() => {
        if (chapter && chapter.scenes && !currentScene) {
            setCurrentScene(chapter.scenes[0]);
        }
    }, [chapter]);

    // Typewriter effect
    useEffect(() => {
        if (!currentScene) return;

        const text = currentScene.text || " ";

        setDisplayText("");
        setIsTyping(true);
        setIsComplete(false);
        setShowChoices(false);

        if (text.length === 0 || text === " ") {
            setIsTyping(false);
            setIsComplete(true);
            if (currentScene.choices && currentScene.choices.length > 0) {
                setShowChoices(true);
            }
            return;
        }

        let index = 0;
        let timerId = null;

        const typeNext = () => {
            if (index < text.length) {
                const currentChar = text.charAt(index);
                setDisplayText(prev => prev + currentChar);
                index++;
                timerId = setTimeout(typeNext, 20);
            } else {
                setIsTyping(false);
                setIsComplete(true);
                if (currentScene.choices && currentScene.choices.length > 0) {
                    setShowChoices(true);
                }
            }
        };

        typeNext();

        return () => {
            if (timerId) clearTimeout(timerId);
        };
    }, [currentScene]);

    // Handle choice
    const handleChoice = (choice) => {
        setShowChoices(false);
        setSceneHistory([...sceneHistory, { scene: currentScene, choice: choice }]);

        if (choice.xpReward) {
            setXpEarned(choice.xpReward);
            addXP(choice.xpReward);
        }

        // Combat choice
        if (choice.isCombat && choice.enemyId) {
            setCombatEnemy(choice.enemyId);
            return;
        }

        const nextScene = chapter.scenes.find(s => s.id === choice.nextScene);

        if (nextScene) {
            setCurrentScene(nextScene);
        } else if (choice.nextScene === 'chapter-end') {
            setChapterComplete(true);
            if (chapter.xpReward) {
                setXpEarned(chapter.xpReward);
                addXP(chapter.xpReward);
            }

            triggerConfetti();

            if (onComplete) onComplete();
        }
    };

    // Handle combat complete
    const handleCombatComplete = (victory) => {
        setCombatEnemy(null);

        if (victory) {
            setChapterComplete(true);
            addXP(30);
            triggerConfetti();

            setTimeout(() => {
                if (onComplete) onComplete(true);
            }, 1500);
        } else {
            // Return to the scene that triggered combat
            const combatScene = chapter.scenes.find(s =>
                s.choices?.some(c => c.isCombat)
            );

            if (combatScene) {
                setCurrentScene(combatScene);
            } else {
                setCurrentScene(chapter.scenes[0]);
            }
        }
    };

    // Speaker name lookup
    const getSpeakerName = (speaker) => {
        if (speaker === 'narrator') return 'Narrator';
        if (speaker === 'player') return userData?.displayName || 'You';
        if (speaker === 'guild') return 'The Guild';
        if (speaker === 'mira') return 'Mira';
        if (speaker === 'daniel') return 'Daniel';
        if (speaker === 'zoe') return 'Zoe';
        if (speaker === 'shadow-scout') return 'Shadow Scout';
        if (speaker === 'default-destroyer') return 'Default Destroyer';
        if (speaker === 'cost-collector') return 'Cost Collector';
        if (speaker === 'urgency-wraith') return 'Urgency Wraith';
        if (speaker === 'shadow-agent') return 'Shadow Agent';
        if (speaker === 'shadow-lord') return 'Shadow Lord';
        return speaker || 'Unknown';
    };

    // Speaker avatar lookup
    const getSpeakerAvatar = (speaker) => {
        if (speaker === 'player') {
            return userData?.avatar || '/images/default-avatar.png';
        }
        if (speaker === 'mira') return '/images/mira.png';
        if (speaker === 'daniel') return '/images/daniel.png';
        if (speaker === 'zoe') return '/images/zoe.png';
        if (speaker === 'guild') return '/images/guild.png';
        if (speaker === 'shadow-scout') return '/images/enemies/shadow-scout.png';
        if (speaker === 'default-destroyer') return '/images/enemies/default-destroyer.png';
        if (speaker === 'cost-collector') return '/images/enemies/cost-collector.png';
        if (speaker === 'urgency-wraith') return '/images/enemies/urgency-wraith.png';
        if (speaker === 'shadow-agent') return '/images/enemies/shadow-agent.png';
        if (speaker === 'shadow-lord') return '/images/enemies/shadow-lord.png';
        return '/images/narrator.png';
    };

    // Chapter not found
    if (!chapter) {
        return (
            <div className="story-error">
                <h3>Story Not Found</h3>
                <p>Chapter ID: {chapterId}</p>
            </div>
        );
    }

    // Combat view
    if (combatEnemy) {
        return (
            <div className="story-container">
                <CombatSystem
                    enemyId={combatEnemy}
                    moduleId={moduleId || 1}
                    onComplete={handleCombatComplete}
                />
            </div>
        );
    }

    // Loading
    if (!currentScene) {
        return <div className="story-loading">Loading story...</div>;
    }

    // Story view
    return (
        <div className="story-container">
            <div className="story-background">
                <div className="story-character">
                    <img
                        src={getSpeakerAvatar(currentScene.speaker)}
                        alt={getSpeakerName(currentScene.speaker)}
                        className="character-avatar"
                        onError={(e) => {
                            e.target.src = '/images/default-avatar.png';
                        }}
                    />
                    <div className="character-name">
                        {getSpeakerName(currentScene.speaker)}
                    </div>
                </div>

                <div className="story-chapter-title">
                    Chapter {chapterId}: {chapter?.title}
                </div>

                <div className="story-dialogue-box">
                    <div className="dialogue-speaker">
                        {getSpeakerName(currentScene.speaker)}
                    </div>
                    <div className="dialogue-text">
                        {displayText || "\u00A0"}
                        {isTyping && <span className="cursor-blink">|</span>}
                    </div>

                    {showChoices && (
                        <div className="dialogue-choices">
                            {currentScene.choices.map((choice) => (
                                <button
                                    key={choice.id}
                                    className={`choice-btn ${choice.isCombat ? 'combat-choice' : ''}`}
                                    onClick={() => handleChoice(choice)}
                                >
                                    {choice.text}
                                </button>
                            ))}
                        </div>
                    )}

                    {!isTyping && isComplete && !showChoices && currentScene.choices && currentScene.choices.length === 0 && (
                        <div className="continue-indicator">
                            <span>Click to continue</span>
                        </div>
                    )}
                </div>
            </div>

            {chapterComplete && (
                <div className="chapter-complete-overlay">
                    <div className="chapter-complete-box">
                        <h2>Chapter Complete!</h2>
                        {xpEarned > 0 && <p>You earned {xpEarned} XP</p>}
                        <button
                            className="continue-btn"
                            onClick={() => {
                                setChapterComplete(false);
                                if (onComplete) onComplete();
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StorySystem;