// src/uicomponents/TutorialModal.jsx
import React, { useState } from 'react';
import { useTutorial } from '../context/TutorialContext';
import { tutorials } from '../data/tutorialData';
import './tutorialmodal.css';

const TutorialModal = ({ tutorialId, onClose }) => {
    const { markTutorialAsSeen } = useTutorial();
    const [currentStep, setCurrentStep] = useState(0);

    const tutorial = tutorials[tutorialId];
    if (!tutorial) return null;

    const step = tutorial.steps[currentStep];
    const isLastStep = currentStep === tutorial.steps.length - 1;

    const handleNext = () => {
        if (isLastStep) {
            markTutorialAsSeen(tutorialId);
            onClose();
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleClose = () => {
        markTutorialAsSeen(tutorialId);
        onClose();
    };

    return (
        <div className="tutorial-popup">
            <div className="tutorial-popup-header">
                <span className="tutorial-popup-title">{tutorial.title}</span>
                <button className="tutorial-popup-close" onClick={handleClose}>✕</button>
            </div>

            <div className="tutorial-popup-body">
                <div className="tutorial-popup-step">
                    {tutorial.steps.length > 1 && (
                        <span className="tutorial-popup-step-count">
                            {currentStep + 1} / {tutorial.steps.length}
                        </span>
                    )}
                    <h4 className="tutorial-popup-step-title">{step.title}</h4>
                    <p className="tutorial-popup-text">{step.text}</p>
                </div>

                <div className="tutorial-popup-footer">
                    {tutorial.steps.length > 1 && (
                        <div className="tutorial-popup-dots">
                            {tutorial.steps.map((_, index) => (
                                <span 
                                    key={index}
                                    className={`tutorial-popup-dot ${index === currentStep ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    )}
                    <button className="tutorial-popup-next" onClick={handleNext}>
                        {isLastStep ? 'Got it!' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorialModal;