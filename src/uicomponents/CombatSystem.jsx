// src/uicomponents/CombatSystem.jsx
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { enemies } from "../data/enemyData";
import { getCombatQuestion } from "../data/combatQuestionsData";
import { getAbilityFromBoss } from "../data/abilitiesData";
import { triggerConfetti } from "../utils/confetti";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "./TutorialModal";
import './combatsystem.css';

const CombatSystem = ({ enemyId, moduleId, onComplete }) => {
    const { userData, addXP, recordCombat, unlockBossReward } = useUser();
    const enemy = enemies[enemyId] || enemies['shadow-scout'];
    const { showTutorial, closeTutorial } = useTutorialTrigger('combat');

    const [playerHP, setPlayerHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(enemy.maxHP);
    const [turn, setTurn] = useState('player');
    const [battleLog, setBattleLog] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [playerAttacking, setPlayerAttacking] = useState(false);
    const [enemyAttacking, setEnemyAttacking] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);

    const addLog = (message, type = 'info') => {
        setBattleLog(prev => [...prev, { message, type, id: Date.now() }]);
    };

    // Player attacks
    const handleAttack = () => {
        if (turn !== 'player' || isAnimating) return;
        const question = getCombatQuestion(moduleId || 1);
        setCurrentQuestion(question);
        setShowQuestion(true);
        setSelectedAnswer(null);
        setTurn('answering');
    };

    // Submit answer
    const handleSubmitAnswer = () => {
        if (selectedAnswer === null || !currentQuestion) return;

        const isCorrect = selectedAnswer === currentQuestion.correctIndex;
        const baseDamage = 20;
        const damage = isCorrect ? baseDamage : Math.floor(baseDamage / 2);

        setShowQuestion(false);
        setTurn('player-attack');
        setIsAnimating(true);
        setPlayerAttacking(true);

        if (isCorrect) {
            addLog(currentQuestion.correctMessage, 'success');
        } else {
            addLog(`${currentQuestion.wrongMessage} (Half damage)`, 'error');
        }

        setTimeout(() => {
            const newEnemyHP = Math.max(0, enemyHP - damage);
            setEnemyHP(newEnemyHP);
            addLog(`You dealt ${damage} damage to ${enemy.name}!`, 'player');
            setPlayerAttacking(false);

            if (newEnemyHP <= 0) {
                setTurn('victory');
                addLog(`${enemy.name} has been defeated!`, 'victory');
                addXP(30);

                recordCombat({
                    enemyId: enemy.id,
                    victory: true,
                    isBoss: true,
                    moduleId: moduleId
                });

                unlockBossReward(enemy.id);
                triggerConfetti();

                setTimeout(() => {
                    if (onComplete) onComplete(true);
                }, 2000);
                return;
            }

            setTimeout(() => {
                setTurn('enemy');
                setIsAnimating(false);
                enemyTurn();
            }, 800);
        }, 800);
    };

    // Enemy attacks
    const enemyTurn = () => {
        setEnemyAttacking(true);
        addLog(`${enemy.name} is attacking...`, 'enemy');

        setTimeout(() => {
            const damage = Math.floor(Math.random() * enemy.attackPower) + 5;
            const newPlayerHP = Math.max(0, playerHP - damage);
            setPlayerHP(newPlayerHP);
            addLog(`${enemy.name} dealt ${damage} damage!`, 'enemy');
            setEnemyAttacking(false);

            if (newPlayerHP <= 0) {
                setTurn('defeat');
                addLog(`You have been defeated...`, 'defeat');
                recordCombat({
                    enemyId: enemy.id,
                    victory: false,
                    isBoss: true,
                    moduleId: moduleId
                });
                setTimeout(() => {
                    if (onComplete) onComplete(false);
                }, 2000);
                return;
            }

            setTimeout(() => {
                setTurn('player');
                setIsAnimating(false);
            }, 800);
        }, 1000);
    };

    // Victory screen
    if (turn === 'victory') {
        const rewardAbility = getAbilityFromBoss(enemy.id);

        return (
            <div className="combat-pokemon-container victory">
                <div className="combat-result-overlay">
                    <h2>Victory!</h2>
                    <p>You defeated {enemy.name}!</p>

                    <div className="result-xp">
                        <span>+30 XP</span>
                    </div>

                    {rewardAbility && (
                        <div className="result-reward">
                            <span className="reward-label">New Ability Unlocked!</span>
                            <div className="reward-ability">
                                <span className="reward-icon">{rewardAbility.icon}</span>
                                <div className="reward-info">
                                    <span className="reward-name">{rewardAbility.title}</span>
                                    <span className="reward-desc">{rewardAbility.ability}</span>
                                    <span className="reward-damage">{rewardAbility.damage} DMG</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        className="combat-btn"
                        onClick={() => onComplete(true)}
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    }

    // Defeat screen
    if (turn === 'defeat') {
        return (
            <div className="combat-pokemon-container defeat">
                <div className="combat-result-overlay">
                    <h2>Defeated</h2>
                    <p>{enemy.name} defeated you.</p>
                    <p className="result-hint">Try again when you're ready.</p>
                    <button
                        className="combat-btn"
                        onClick={() => onComplete(false)}
                    >
                        Retreat
                    </button>
                </div>
            </div>
        );
    }

    // Main combat view
    return (
        <div className="combat-pokemon-container">
            <div className="combat-pokemon-scene">
                <div className="pokemon-enemy">
                    <div className={`pokemon-enemy-avatar ${enemyAttacking ? 'attacking' : ''}`}>
                        <img src={enemy.avatar} alt={enemy.name} onError={(e) => { e.target.src = '/images/default-avatar.png'; }} />
                    </div>
                    <div className="pokemon-enemy-info">
                        <h3>{enemy.name}</h3>
                        <HealthBar current={enemyHP} max={enemy.maxHP} />
                    </div>
                </div>

                <div className="pokemon-player">
                    <div className="pokemon-player-info">
                        <h3>{userData?.displayName || 'You'}</h3>
                        <HealthBar current={playerHP} max={100} />
                    </div>
                    <div className={`pokemon-player-avatar ${playerAttacking ? 'attacking' : ''}`}>
                        <img src={userData?.avatar || '/images/default-avatar.png'} alt="Player" onError={(e) => { e.target.src = '/images/default-avatar.png'; }} />
                    </div>
                </div>
            </div>

            <div className="pokemon-dialogue-box">
                <div className="pokemon-battle-log">
                    {battleLog.slice(-4).map(log => (
                        <div key={log.id} className={`log-entry ${log.type}`}>
                            {log.message}
                        </div>
                    ))}
                    {battleLog.length === 0 && (
                        <div className="log-entry info">
                            {enemy.name} appears! What will you do?
                        </div>
                    )}
                </div>

                {turn === 'player' && !showQuestion && (
                    <div className="pokemon-actions">
                        <button className="pokemon-action-btn attack" onClick={handleAttack}>
                            Attack
                        </button>
                    </div>
                )}

                {turn === 'enemy' && (
                    <div className="pokemon-waiting">
                        <p>{enemy.name} is attacking...</p>
                        <div className="loading-dots">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
            </div>

            {showQuestion && currentQuestion && (
                <div className="pokemon-question-modal">
                    <div className="pokemon-question-box">
                        <h3>Answer to Attack!</h3>
                        <p className="question-text">{currentQuestion.question}</p>
                        <div className="question-options">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`question-option ${selectedAnswer === index ? 'selected' : ''}`}
                                    onClick={() => setSelectedAnswer(index)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <button
                            className="submit-answer-btn"
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswer === null}
                        >
                            Submit Answer
                        </button>
                    </div>
                </div>
            )}

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="combat"
                    onClose={closeTutorial}
                />
            )}
        </div>
    );
};

const HealthBar = ({ current, max }) => {
    const percentage = Math.max(0, (current / max) * 100);
    const getColor = () => {
        if (percentage > 60) return 'healthy';
        if (percentage > 30) return 'warning';
        return 'danger';
    };
    return (
        <div className="health-bar-container">
            <div className="health-bar">
                <div className={`health-fill ${getColor()}`} style={{ width: `${percentage}%` }} />
            </div>
            <span className="health-text">{Math.round(current)} / {max} HP</span>
        </div>
    );
};

export default CombatSystem;