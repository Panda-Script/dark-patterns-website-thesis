// src/pages/QuizPage.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { lessonsData } from "../data/lessonsData";
import AppLayout from "../uicomponents/appLayout";
import QuizQuestion from "../uicomponents/QuizQuestion";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "../uicomponents/TutorialModal";
import './quizpage.css';

const QuizPage = () => {
    const { moduleId, lessonId } = useParams();
    const navigate = useNavigate();
    const { userData, addXP, updateUser, recordQuiz } = useUser();
    const { showTutorial, closeTutorial } = useTutorialTrigger('quiz');

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Find the lesson data
    const moduleData = lessonsData.modules.find(m => m.id === parseInt(moduleId));
    const lesson = moduleData?.lessons.find(l => l.id === parseInt(lessonId));

    if (!lesson || !moduleData) {
        return (
            <AppLayout>
                <div className="error">Quiz not found</div>
            </AppLayout>
        );
    }

    const questions = lesson.quiz?.questions || [];
    if (questions.length === 0) {
        return (
            <AppLayout>
                <div className="error">No questions available for this quiz</div>
            </AppLayout>
        );
    }

    const currentQ = questions[currentQuestion];

    const handleSelectAnswer = (answerIndex) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: answerIndex,
        });
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setIsSubmitted(false);
        } else {
            // Calculate score
            const correct = questions.filter(
                (q, index) => selectedAnswers[index] === q.correct_answer
            ).length;
            const score = Math.round((correct / questions.length) * 100);
            const passed = score >= 60;

            const lessonKey = `${moduleId}-${lessonId}`;

            // Award XP
            const xpEarned = passed ? 25 : 10;
            addXP(xpEarned);

            // Record quiz result (triggers badge checks)
            recordQuiz({
                moduleId: parseInt(moduleId),
                lessonId: parseInt(lessonId),
                score: score,
                passed: passed
            });

            // Update module progress
            const moduleProgress = userData.moduleProgress || {};
            const currentModuleProgress = moduleProgress[moduleId] || {
                lessonsCompleted: 0,
                progress: 0,
                completed: false
            };

            const lessonProgress = userData.lessonProgress || {};
            const lessonCompleted = lessonProgress[lessonKey]?.completed || false;

            if (!lessonCompleted && passed) {
                const updatedModuleProgress = {
                    ...currentModuleProgress,
                    lessonsCompleted: (currentModuleProgress.lessonsCompleted || 0) + 1,
                    progress: Math.round(((currentModuleProgress.lessonsCompleted || 0) + 1) / moduleData.lessons.length * 100)
                };

                // Check if module is complete
                if (updatedModuleProgress.lessonsCompleted === moduleData.lessons.length) {
                    updatedModuleProgress.completed = true;
                }

                updateUser({
                    moduleProgress: {
                        ...moduleProgress,
                        [moduleId]: updatedModuleProgress
                    },
                    lessonProgress: {
                        ...lessonProgress,
                        [lessonKey]: { completed: true }
                    },
                    lessonsDone: (userData.lessonsDone || 0) + 1,
                    lastCompletedLesson: {
                        moduleId: parseInt(moduleId),
                        lessonId: parseInt(lessonId)
                    }
                });
            }

            navigate(`/quiz/results/${moduleId}/${lessonId}?score=${score}&passed=${passed}`);
        }
    };

    return (
        <AppLayout>
            <div className="quiz-page">
                <div className="quiz-header">
                    <h2>Quiz: {lesson.title}</h2>
                    <span className="quiz-progress">
                        Question {currentQuestion + 1} of {questions.length}
                    </span>
                </div>

                <QuizQuestion
                    question={currentQ}
                    questionNumber={currentQuestion + 1}
                    totalQuestions={questions.length}
                    selectedAnswer={selectedAnswers[currentQuestion]}
                    onSelectAnswer={handleSelectAnswer}
                    isSubmitted={isSubmitted}
                />

                <div className="quiz-actions">
                    {!isSubmitted ? (
                        <button
                            onClick={handleSubmit}
                            disabled={selectedAnswers[currentQuestion] === undefined}
                            className="btn-primary"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button onClick={handleNext} className="btn-primary">
                            {currentQuestion < questions.length - 1
                                ? "Next Question"
                                : "See Results"}
                        </button>
                    )}
                    <Link to={`/lesson/${moduleId}/${lessonId}`} className="btn-secondary">
                        Back to Lesson
                    </Link>
                </div>
            </div>

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="quiz"
                    onClose={closeTutorial}
                />
            )}
        </AppLayout>
    );
};

export default QuizPage;