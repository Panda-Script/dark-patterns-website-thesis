// src/pages/QuizResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { lessonsData } from "../data/lessonsData";
import { getStoryChapter } from "../data/storyData";
import { triggerConfetti } from "../utils/confetti";
import AppLayout from "../uicomponents/appLayout";
import StorySystem from "../uicomponents/StorySystem";
import './quizpage.css';

const QuizResultsPage = () => {
    const { moduleId, lessonId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { userData, updateUser } = useUser();
    
    const [showStory, setShowStory] = useState(false);
    const [storyChapterId, setStoryChapterId] = useState(null);
    const [storyReturnPath, setStoryReturnPath] = useState('/modules');

    const searchParams = new URLSearchParams(location.search);
    const score = parseInt(searchParams.get('score')) || 0;
    const passed = searchParams.get('passed') === 'true';

    const moduleData = lessonsData.modules.find(m => m.id === parseInt(moduleId));
    const lesson = moduleData?.lessons.find(l => l.id === parseInt(lessonId));

    // ✅ CHECK FOR STORY TRIGGERS
    useEffect(() => {
        if (!lesson || !userData || !passed) return;

        const storyProgress = userData.storyProgress || {};
        const lessonKey = `${moduleId}-${lessonId}`;
        const lessonCompleted = userData.lessonProgress?.[lessonKey]?.completed;

        console.log('===== STORY TRIGGER CHECK =====');
        console.log('Module:', moduleId, 'Lesson:', lessonId);
        console.log('Passed:', passed);
        console.log('Lesson Completed:', lessonCompleted);

        if (passed && lessonCompleted) {
            
            // ============================================
            // TRIGGER 1: After each lesson (Interludes)
            // ============================================
            const lessonTriggers = {
                '1-1': 'module-1-lesson-1',
                '1-2': 'module-1-lesson-2',
                '1-3': 'module-1-lesson-3',
                '2-1': 'module-2-lesson-1',
                '2-2': 'module-2-lesson-2',
                '2-3': 'module-2-lesson-3',
                '3-1': 'module-3-lesson-1',
                '3-2': 'module-3-lesson-2',
                '3-3': 'module-3-lesson-3',
                '4-1': 'module-4-lesson-1',
                '4-2': 'module-4-lesson-2',
                '4-3': 'module-4-lesson-3',
            };

            const triggerKey = `${moduleId}-${lessonId}`;
            const trigger = lessonTriggers[triggerKey];

            // ✅ TRIGGER 1: Check for lesson story (Interlude)
            if (trigger) {
                const chapter = getStoryChapter(trigger);
                if (chapter && !storyProgress[chapter.id]) {
                    console.log('✅ LESSON STORY WILL SHOW:', trigger);
                    setStoryChapterId(chapter.id);
                    // ✅ If there's a next lesson, go there. Otherwise, go to modules.
                    const nextLessonId = parseInt(lessonId) + 1;
                    const hasNextLesson = moduleData?.lessons.some(l => l.id === nextLessonId);
                    setStoryReturnPath(hasNextLesson ? `/lesson/${moduleId}/${nextLessonId}` : '/modules');
                    setShowStory(true);
                    return;
                }
            }

            // ============================================
            // TRIGGER 2: After Module Completion (Boss Fights)
            // ============================================
            const moduleTriggers = {
                1: 'module-1-complete',
                2: 'module-2-complete',
                3: 'module-3-complete',
                4: 'module-4-complete',
            };

            const moduleTrigger = moduleTriggers[parseInt(moduleId)];
            
            // ✅ CHECK: Are all lessons in this module completed?
            const allLessons = moduleData.lessons;
            const allCompleted = allLessons.every(l => 
                userData.lessonProgress?.[`${moduleId}-${l.id}`]?.completed
            );

            const isLastLesson = parseInt(lessonId) === allLessons.length;

            console.log('All Lessons Completed?', allCompleted);
            console.log('Is Last Lesson?', isLastLesson);
            console.log('Module Trigger:', moduleTrigger);

            // ✅ ONLY trigger boss if:
            // 1. All lessons are completed
            // 2. The lesson just completed is the LAST lesson
            // 3. The boss chapter exists
            // 4. The boss chapter is NOT already completed
            if (moduleTrigger && allCompleted && isLastLesson) {
                const chapter = getStoryChapter(moduleTrigger);
                if (chapter && !storyProgress[chapter.id]) {
                    console.log('✅ BOSS STORY WILL SHOW!', moduleTrigger);
                    setStoryChapterId(chapter.id);
                    setStoryReturnPath('/modules');  // ✅ ALWAYS go back to modules after boss
                    setShowStory(true);
                    return;
                }
            }
        }
    }, [passed, lesson, userData, moduleId, lessonId, moduleData]);

    const handleStoryComplete = () => {
        console.log('✅ Story Complete - Chapter:', storyChapterId);
        
        // ✅ Mark chapter as completed
        updateUser({
            storyProgress: {
                ...userData.storyProgress,
                [storyChapterId]: true
            }
        });
        
        setShowStory(false);
        
        // ✅ Navigate to the return path (next lesson or modules)
        if (storyReturnPath) {
            navigate(storyReturnPath);
        } else {
            navigate('/modules');
        }
    };

    useEffect(() => {
    if (passed) {
        // Confetti when the user passes
        triggerConfetti();
        
        // Extra confetti for perfect score
        if (score === 100) {
            setTimeout(() => triggerConfetti(), 500);
            setTimeout(() => triggerConfetti(), 1000);
        }
    }
    }, [passed, score]);

    if (!lesson) {
        return (
            <AppLayout>
                <div className="error">Results not found</div>
            </AppLayout>
        );
    }

    // ✅ Find next lesson for display
    const nextLessonId = parseInt(lessonId) + 1;
    const hasNextLesson = moduleData?.lessons.some(l => l.id === nextLessonId);
    const isLastLesson = parseInt(lessonId) === moduleData?.lessons.length;
    const allCompleted = moduleData?.lessons.every(l => 
        userData?.lessonProgress?.[`${moduleId}-${l.id}`]?.completed
    );

    return (
        <>
            <AppLayout>
                <div className="quiz-page results-page">
                    <div className="results-container">
                        <div className={`results-icon ${passed ? 'passed' : 'failed'}`}>
                            {passed ? '🎉' : '📚'}
                        </div>
                        
                        <h2>{passed ? 'Quiz Complete!' : 'Keep Learning!'}</h2>
                        
                        <div className="score-display">
                            <span className="score-number">{score}%</span>
                            <span className={`score-label ${passed ? 'passed' : 'failed'}`}>
                                {passed ? '✅ Passed' : '🔄 Needs Review'}
                            </span>
                        </div>

                        <div className="results-details">
                            <p className="results-message">
                                {passed 
                                    ? `Great job! You've earned 25 XP and completed "${lesson.title}"!`
                                    : `You scored ${score}%. Review the lesson and try again to earn 25 XP!`}
                            </p>
                            {passed && (
                                <div className="results-xp">
                                    <span>⭐ +25 XP Earned</span>
                                </div>
                            )}
                            {passed && isLastLesson && allCompleted && (
                                <div className="results-boss-coming">
                                    <span>⚔️ Boss Fight Loading...</span>
                                </div>
                            )}
                        </div>

                        <div className="results-actions">
                            {passed ? (
                                <Link to="/modules" className="btn-primary">
                                    Continue Journey →
                                </Link>
                            ) : (
                                <Link to={`/lesson/${moduleId}/${lessonId}`} className="btn-primary">
                                    Review Lesson
                                </Link>
                            )}
                            <Link to="/modules" className="btn-secondary">
                                Back to Modules
                            </Link>
                        </div>
                    </div>
                </div>
            </AppLayout>

            {showStory && (
                <div className="story-modal-overlay" onClick={() => {}}>
                    <div className="story-modal" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="story-close-btn"
                            onClick={() => setShowStory(false)}
                        >
                            ✕
                        </button>
                        <StorySystem 
                            chapterId={storyChapterId}
                            onComplete={handleStoryComplete}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default QuizResultsPage;