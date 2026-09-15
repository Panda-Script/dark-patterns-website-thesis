// src/pages/LessonPage.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import AppLayout from "../uicomponents/appLayout";
import { lessonsData } from "../data/lessonsData";
import { interactiveExamples } from '../data/interactiveExamples';
import {
    ComparisonExample,
    OneOrTheOther,
    SortExample,
    TimerExample,
    ReviewAnalyzerExample,
    ProgressiveExample,
    CardFlipExample,
    CheckboxExample
} from "../uicomponents/InteractiveExamples";
import { useTutorialTrigger } from "../hooks/useTutorialTrigger";
import TutorialModal from "../uicomponents/TutorialModal";
import './lessonpage.css';

const LessonPage = () => {
    const { moduleId, lessonId } = useParams();
    const navigate = useNavigate();
    const { userData } = useUser();
    const { showTutorial, closeTutorial } = useTutorialTrigger('lesson');

    // Find the lesson data
    const moduleData = lessonsData.modules.find(m => m.id === parseInt(moduleId));
    const lesson = moduleData?.lessons.find(l => l.id === parseInt(lessonId));

    if (!lesson || !moduleData) {
        return (
            <AppLayout>
                <div className="error">Lesson not found</div>
            </AppLayout>
        );
    }

    // Map example type to the correct component
    const getExampleComponent = (exampleType) => {
        switch(exampleType) {
            case 'comparison':
                return ComparisonExample;
            case 'one-or-the-other':
                return OneOrTheOther;
            case 'checkbox':
                return CheckboxExample;
            case 'sort':
                return SortExample;
            case 'timer':
                return TimerExample;
            case 'review':
                return ReviewAnalyzerExample;
            case 'progressive':
                return ProgressiveExample;
            case 'card-flip':
                return CardFlipExample;
            default:
                return null;
        }
    };

    const exampleKey = `${moduleId}-${lessonId}`;
    const exampleData = interactiveExamples[exampleKey];
    const ExampleComponent = exampleData ? getExampleComponent(exampleData.type) : null;

    return (
        <AppLayout>
            <div className="lesson-page">
                {/* Header */}
                <div className="lesson-header">
                    <div className="lesson-breadcrumb">
                        <Link to="/modules" className="breadcrumb-link">
                            Back to Modules
                        </Link>
                        <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">
                            Module {moduleId}: Lesson {lessonId}
                        </span>
                    </div>
                    <div className="lesson-meta">
                        <span className="lesson-duration">{lesson.duration} min</span>
                        <span className="lesson-topic">{lesson.topic}</span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="lesson-title">{lesson.title}</h1>

                {/* Content */}
                <div className="lesson-content">
                    {/* Concept */}
                    <section className="lesson-section concept-section">
                        <h3>The Concept</h3>
                        <div
                            className="concept-text"
                            dangerouslySetInnerHTML={{ __html: lesson.concept }}
                        />
                    </section>

                    {/* Good vs Bad */}
                    <section className="lesson-section comparison-section">
                        <h3>Good vs Bad</h3>
                        <div className="comparison-grid">
                            <div className="comparison-card good">
                                <div className="comparison-header">
                                    <span className="badge good">Good</span>
                                    <h4>{lesson.goodExample.title}</h4>
                                </div>
                                <p className="comparison-description">{lesson.goodExample.description}</p>
                                <ul>
                                    {lesson.goodExample.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="comparison-divider">
                                <span>VS</span>
                            </div>
                            <div className="comparison-card bad">
                                <div className="comparison-header">
                                    <span className="badge bad">Bad</span>
                                    <h4>{lesson.badExample.title}</h4>
                                </div>
                                <p className="comparison-description">{lesson.badExample.description}</p>
                                <ul>
                                    {lesson.badExample.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Key Test */}
                    <section className="lesson-section test-section">
                        <h3>Key Test</h3>
                        <div className="test-box">
                            <p>{lesson.keyTest}</p>
                        </div>
                    </section>

                    {/* How to Spot It */}
                    <section className="lesson-section spot-section">
                        <h3>How to Spot It</h3>
                        <ul className="spot-list">
                            {lesson.howToSpot.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Interactive Example */}
                    {ExampleComponent && exampleData && (
                        <section className="lesson-section interactive-section">
                            <ExampleComponent
                                {...exampleData.props}
                                onComplete={(correct) => {
                                    console.log(`Interactive example ${correct ? 'passed' : 'needs review'}`);
                                }}
                            />
                        </section>
                    )}

                    {/* Summary */}
                    <section className="lesson-section summary-section">
                        <h3>Summary</h3>
                        <div className="summary-box">
                            <p>{lesson.summary}</p>
                        </div>
                    </section>
                </div>

                {/* Actions */}
                <div className="lesson-actions">
                    <button
                        className="btn-primary"
                        onClick={() => navigate(`/quiz/${moduleId}/${lessonId}`)}
                    >
                        Take Quiz
                    </button>
                    <Link to="/modules" className="btn-secondary">
                        Back to Modules
                    </Link>
                </div>
            </div>

            {/* Tutorial */}
            {showTutorial && (
                <TutorialModal
                    tutorialId="lesson"
                    onClose={closeTutorial}
                />
            )}
        </AppLayout>
    );
};

export default LessonPage;