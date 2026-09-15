// src/uicomponents/MissionCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { lessonsData } from "../data/lessonsData";
import "./uicomponents.css";

const MissionCard = () => {
    const { userData } = useUser();

    // Find the current mission based on user progress
    const getCurrentMission = () => {
        // Check which module the user is on
        for (let i = 1; i <= lessonsData.modules.length; i++) {
            const module = userData.moduleProgress?.[i];
            if (!module || !module.completed) {
                // Find the first incomplete lesson in this module
                const moduleData = lessonsData.modules.find(m => m.id === i);
                if (moduleData) {
                    const nextLesson = moduleData.lessons.find(
                        lesson => !userData.lessonProgress?.[`${i}-${lesson.id}`]?.completed
                    );
                    return {
                        moduleId: i,
                        moduleTitle: moduleData.title,
                        lessonId: nextLesson?.id || moduleData.lessons[0].id,
                        lessonTitle: nextLesson?.title || moduleData.lessons[0].title,
                        progress: module?.lessonsCompleted || 0,
                        totalLessons: moduleData.lessons.length,
                        status: module?.completed ? 'completed' : 
                                module?.lessonsCompleted > 0 ? 'in-progress' : 'open'
                    };
                }
            }
        }
        // If all modules are completed
        return null;
    };

    const mission = getCurrentMission();

    // If all modules are completed
    if (!mission) {
        return (
            <div className="mission-container">
                <div className="border-mission">
                    <h3 className="mission-header">🏆 Mission Complete!</h3>
                    <h4 className="mission-title">You've Completed All Training</h4>
                    <p className="mission-debrief">
                        You've mastered all the dark pattern techniques. 
                        You are now a certified Dark Pattern Defender!
                    </p>
                    <p className="mission-reminder">
                        Continue to practice spotting dark patterns in the wild.
                    </p>
                    <Link to="/badges" className="mission-link">
                        View Your Badges →
                    </Link>
                </div>
            </div>
        );
    }

    // Get the next lesson details
    const moduleData = lessonsData.modules.find(m => m.id === mission.moduleId);

    // Status text and color
    const getStatusInfo = () => {
        switch(mission.status) {
            case 'completed':
                return { label: 'Completed', color: 'var(--success-bright)' };
            case 'in-progress':
                return { label: 'In Progress', color: 'var(--warning)' };
            case 'open':
            default:
                return { label: 'Available', color: 'var(--purple-bright)' };
        }
    };

    const statusInfo = getStatusInfo();

    return (
        <div className="mission-container">
            <div className="border-mission">
                <h3 className="mission-header">🎯 Your Mission</h3>
                
                <div className="mission-status">
                    <span className="mission-status-badge" style={{ 
                        color: statusInfo.color,
                        background: `${statusInfo.color}20`,
                        padding: '2px 12px',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: '8px'
                    }}>
                        {statusInfo.label}
                    </span>
                </div>

                <h4 className="mission-title">
                    Module {mission.moduleId}: {mission.moduleTitle}
                </h4>
                
                <p className="mission-debrief">
                    {mission.status === 'completed' ? (
                        `You've completed all lessons in Module ${mission.moduleId}!`
                    ) : mission.status === 'in-progress' ? (
                        `Continue your training in ${mission.moduleTitle}. Complete the remaining lessons to unlock the next module.`
                    ) : (
                        `Begin your training in ${mission.moduleTitle}. ${moduleData?.description || ''}`
                    )}
                </p>

                <div className="mission-progress">
                    <div className="mission-progress-info">
                        <span>Progress: {mission.progress} / {mission.totalLessons} lessons</span> 
                        <p></p>
                        <span>{Math.round((mission.progress / mission.totalLessons) * 100)}%</span>
                    </div>
                    <div className="mission-progress-bar">
                        <div 
                            className="mission-progress-fill" 
                            style={{ 
                                width: `${(mission.progress / mission.totalLessons) * 100}%`,
                                background: 'linear-gradient(90deg, var(--purple-dark), var(--purple-bright))',
                                height: '4px',
                                borderRadius: '4px',
                                transition: 'width 0.6s ease'
                            }}
                        ></div>
                    </div>
                </div>

                <p className="mission-reminder">
                    {mission.status === 'completed' ? (
                        `Ready to start Module ${mission.moduleId + 1}?`
                    ) : (
                        `Complete this module to unlock the next mission.`
                    )}
                </p>

                <Link 
                    to={`/lesson/${mission.moduleId}/${mission.lessonId}`} 
                    className="mission-link"
                >
                    {mission.status === 'completed' ? 'Next Module →' : 'Continue Training →'}
                </Link>
            </div>
        </div>
    );
};

export default MissionCard;