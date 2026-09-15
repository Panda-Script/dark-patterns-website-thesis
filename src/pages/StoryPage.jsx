// src/pages/StoryPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import StorySystem from "../uicomponents/StorySystem";
import './storypage.css';

const StoryPage = () => {
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const { userData, updateUser } = useUser();
    const [storyComplete, setStoryComplete] = useState(false);

    const handleStoryComplete = () => {
        // Mark chapter as completed
        updateUser({
            storyProgress: {
                ...userData.storyProgress,
                [parseInt(chapterId)]: true
            },
            storyInProgress: null
        });
        
        setStoryComplete(true);
    };

    // Get the return path (where to go after story)
    const returnPath = userData?.storyReturnPath || '/modules';

    return (
        <div className="story-page-container">
            {!storyComplete ? (
                <StorySystem 
                    chapterId={parseInt(chapterId)}
                    onComplete={handleStoryComplete}
                />
            ) : (
                <div className="story-complete-container">
                    <div className="story-complete-box">
                        <h2>📖 Story Complete!</h2>
                        <p>You've earned XP for completing this chapter.</p>
                        <div className="story-complete-actions">
                            <button 
                                className="btn-primary"
                                onClick={() => {
                                    // Clear the return path
                                    updateUser({ storyReturnPath: null });
                                    navigate(returnPath);
                                }}
                            >
                                Next Lesson →
                            </button>
                            <button 
                                className="btn-secondary"
                                onClick={() => {
                                    updateUser({ storyReturnPath: null });
                                    navigate('/modules');
                                }}
                            >
                                Back to Modules
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StoryPage;