// src/uicomponents/InteractiveExamples.jsx
import React, { useState, useEffect } from "react";
import {
    DndContext,
    closestCenter,
    useDraggable,
    useDroppable,
    DragOverlay,
} from '@dnd-kit/core';
import './interactiveexamples.css';

// ========================================
// COMPARISON EXAMPLE
// ========================================
export const ComparisonExample = ({ 
    instruction,
    goodComponent,
    badComponent,
    correctAnswer,
    explanation,
    onComplete
}) => {
    const [userChoice, setUserChoice] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChoice = (choice) => {
        if (showFeedback) return;
        setUserChoice(choice);
        const correct = choice === correctAnswer;
        setIsCorrect(correct);
        setShowFeedback(true);
        if (onComplete) onComplete(correct);
    };

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
            </div>

            <div className="example-content">
                <div className="comparison-container">
                    <div className="comparison-grid">
                        <div 
                            className={`comparison-item ${userChoice === 'good' ? 'selected-good' : ''}`}
                            onClick={() => handleChoice('good')}
                            style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                        >
                            <div className="version-header">Version A</div>
                            <div className="version-content">
                                {goodComponent}
                            </div>
                        </div>

                        <div className="comparison-divider">VS</div>

                        <div 
                            className={`comparison-item ${userChoice === 'bad' ? 'selected-bad' : ''}`}
                            onClick={() => handleChoice('bad')}
                            style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                        >
                            <div className="version-header">Version B</div>
                            <div className="version-content">
                                {badComponent}
                            </div>
                        </div>
                    </div>

                    {showFeedback && (
                        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <p>
                                {isCorrect ? 'Correct' : 'Not quite'} 
                                {' '}{explanation}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ========================================
// ONE OR THE OTHER EXAMPLE
// ========================================
export const OneOrTheOther = ({
    question,
    optionA,
    optionB,
    correctAnswer,
    explanation,
    onComplete
}) => {
    const [userChoice, setUserChoice] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChoice = (choice) => {
        if (showFeedback) return;
        setUserChoice(choice);
        const correct = choice === correctAnswer;
        setIsCorrect(correct);
        setShowFeedback(true);
        if (onComplete) onComplete(correct);
    };

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Quick Check</span>
                <p className="example-instruction">{question}</p>
            </div>

            <div className="example-content">
                <div className="one-or-the-other">
                    <div className="choice-container">
                        <div 
                            className={`choice-option ${userChoice === 'A' ? 'selected' : ''}`}
                            onClick={() => handleChoice('A')}
                            style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                        >
                            <h3>Option A</h3>
                            <div className="choice-content">
                                {optionA}
                            </div>
                        </div>

                        <div className="choice-divider">OR</div>

                        <div 
                            className={`choice-option ${userChoice === 'B' ? 'selected' : ''}`}
                            onClick={() => handleChoice('B')}
                            style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                        >
                            <h3>Option B</h3>
                            <div className="choice-content">
                                {optionB}
                            </div>
                        </div>
                    </div>

                    {showFeedback && (
                        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <p>
                                {isCorrect ? 'Correct' : 'Not quite'} 
                                {' '}{explanation}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ========================================
// DRAGGABLE ITEM
// ========================================
function DraggableItem({id, children}) {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: id,
    });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        opacity: isDragging ? 0.4 : 1,
        cursor: 'grab',
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="sort-item draggable"
        >
            {children}
        </div>
    );
}

// ========================================
// DROPPABLE AREA
// ========================================
function DroppableArea({id, children, className}) {
    const {setNodeRef, isOver} = useDroppable({
        id: id
    });

    const style = {
        borderColor: isOver ? '#7c3aed' : undefined,
        background: isOver ? 'rgba(124, 58, 237, 0.05)' : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`sort-dropzone ${className || ''} ${isOver ? 'drag-over' : ''}`}
        >
            {children}
        </div>
    );
}

// ========================================
// SORT EXAMPLE
// ========================================
export const SortExample = ({
    instruction,
    items,
    correctFeedback,
    incorrectFeedback,
    onComplete
}) => {
    const [sortItems, setSortItems] = useState(() => {
        return items.map((item, index) => ({
            ...item,
            id: index,
            category: null,
        }));
    });

    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const {active, over} = event;
        if (!over || active.id === over.id) {
            setActiveId(null);
            return;
        }

        const draggedItem = sortItems.find(item => item.id === active.id);
        if (!draggedItem) {
            setActiveId(null);
            return;
        }

        setSortItems(prevItems => 
            prevItems.map(item => {
                if (item.id === active.id) {
                    if (item.category === over.id) {
                        return {...item, category: null};
                    }
                    return {...item, category: over.id};
                }
                return item;
            })
        );

        setActiveId(null);
    };

    const handleCheckAnswers = () => {
        let correct = 0;
        const total = sortItems.length;
        
        sortItems.forEach(item => {
            const originalItem = items[item.id];
            if (originalItem && item.category === originalItem.category) {
                correct++;
            }
        });
        
        const isAllCorrect = correct === total;
        setIsCorrect(isAllCorrect);
        setShowFeedback(true);
        if (onComplete) onComplete(isAllCorrect);
    };

    const resetSort = () => {
        if (showFeedback) return;
        setSortItems(prev => prev.map(item => ({ ...item, category: null })));
    };

    const realItems = sortItems.filter(item => item.category === 'real');
    const fakeItems = sortItems.filter(item => item.category === 'fake');
    const unsortedItems = sortItems.filter(item => item.category === null);
    const allSorted = unsortedItems.length === 0;

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
                <p className="sort-hint">Drag items to the categories below</p>
            </div>

            <div className="example-content">
                <DndContext
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCenter}
                >
                    <div className="sorting-container">
                        <div className="sort-categories">
                            <div className="sort-category real">
                                <h4>Category 1</h4>
                                <DroppableArea id="real" className="real-dropzone">
                                    {realItems.map((item) => (
                                        <DraggableItem key={item.id} id={item.id}>
                                            {item.text}
                                        </DraggableItem>
                                    ))}
                                    {realItems.length === 0 && (
                                        <div className="sort-placeholder">Drop here</div>
                                    )}
                                </DroppableArea>
                            </div>
                            
                            <div className="sort-category fake">
                                <h4>Category 2</h4>
                                <DroppableArea id="fake" className="fake-dropzone">
                                    {fakeItems.map((item) => (
                                        <DraggableItem key={item.id} id={item.id}>
                                            {item.text}
                                        </DraggableItem>
                                    ))}
                                    {fakeItems.length === 0 && (
                                        <div className="sort-placeholder">Drop here</div>
                                    )}
                                </DroppableArea>
                            </div>
                        </div>

                        {unsortedItems.length > 0 && (
                            <div className="sort-items-pool">
                                <h4>Unsorted Items</h4>
                                <div className="sort-items-grid">
                                    {unsortedItems.map((item) => (
                                        <DraggableItem key={item.id} id={item.id}>
                                            {item.text}
                                        </DraggableItem>
                                    ))}
                                </div>
                            </div>
                        )}

                        <DragOverlay>
                            {activeId ? (
                                <div className="sort-item dragging">
                                    {sortItems.find(item => item.id === activeId)?.text}
                                </div>
                            ) : null}
                        </DragOverlay>

                        <div className="sort-actions">
                            {!showFeedback && (
                                <>
                                    <button 
                                        className="check-answer-btn"
                                        onClick={handleCheckAnswers}
                                        disabled={!allSorted}
                                    >
                                        Check Answers
                                    </button>
                                    <button 
                                        className="reset-btn"
                                        onClick={resetSort}
                                    >
                                        Reset
                                    </button>
                                </>
                            )}
                        </div>

                        {showFeedback && (
                            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                                <p>{isCorrect ? 'Correct' : 'Not quite'} 
                                    {isCorrect ? correctFeedback : incorrectFeedback}
                                </p>
                            </div>
                        )}
                    </div>
                </DndContext>
            </div>
        </div>
    );
};

// ========================================
// TIMER EXAMPLE
// ========================================
export const TimerExample = ({
    instruction,
    duration = 10,
    explanation,
    onComplete
}) => {
    const [timerProgress, setTimerProgress] = useState(duration);
    const [showTimerResult, setShowTimerResult] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerProgress(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setShowTimerResult(true);
                    if (onComplete) onComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
            </div>

            <div className="example-content">
                <div className="timer-container">
                    <div className="timer-display">
                        {timerProgress.toString().padStart(2, '0')}
                    </div>

                    <div className="timer-bar">
                        <div 
                            className="timer-fill" 
                            style={{ 
                                width: `${(timerProgress / duration) * 100}%` 
                            }}
                        />
                    </div>

                    <p className="timer-label">Limited time offer</p>
                </div>
            </div>

            {showTimerResult && (
                <div className="timer-result">
                    <p>{explanation}</p>
                </div>
            )}
        </div>
    );
};

// ========================================
// REVIEW ANALYZER EXAMPLE
// ========================================
export const ReviewAnalyzerExample = ({
    instruction,
    reviews,
    correctFeedback,
    incorrectFeedback,
    onComplete
}) => {
    const [selectedReviews, setSelectedReviews] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleReviewClick = (reviewId) => {
        if (showFeedback) return;

        setSelectedReviews(prev => {
            if (prev.includes(reviewId)) {
                return prev.filter(id => id !== reviewId);
            } else {
                return [...prev, reviewId];
            }
        });
    };

    const handleCheckAnswers = () => {
        let allCorrect = true;
        
        selectedReviews.forEach(reviewId => {
            const review = reviews.find(r => r.id === reviewId);
            if (review && !review.isFake) {
                allCorrect = false;
            }
        });

        const fakeReviews = reviews.filter(r => r.isFake);
        const allFakeSelected = fakeReviews.every(r => selectedReviews.includes(r.id));

        const isCorrect = allCorrect && allFakeSelected;
        setIsCorrect(isCorrect);
        setShowFeedback(true);
        if (onComplete) onComplete(isCorrect);
    };

    const resetSelection = () => {
        if (showFeedback) return;
        setSelectedReviews([]);
    };

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
                <p className="example-stats">
                    Selected: {selectedReviews.length} / {reviews.filter(r => r.isFake).length} suspicious reviews
                </p>
            </div>

            <div className="example-content">
                <div className="review-container">
                    <div className="review-list">
                        {reviews.map((review) => {
                            const isSelected = selectedReviews.includes(review.id);

                            return (
                                <div 
                                    key={review.id} 
                                    className={`review-item ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleReviewClick(review.id)}
                                    style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                                >
                                    <div className="review-header">
                                        <span className="review-author">{review.author}</span>
                                        <span className="review-rating">{review.rating}</span>
                                    </div>
                                    <p className="review-text">"{review.text}"</p>
                                    
                                    {showFeedback && isSelected && (
                                        <div className={`review-feedback ${review.isFake ? 'fake' : 'real'}`}>
                                            {review.isFake ? 'Suspicious' : 'Trustworthy'} - {review.reason}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="review-actions">
                        {!showFeedback && (
                            <>
                                <button 
                                    className="check-answer-btn"
                                    onClick={handleCheckAnswers}
                                    disabled={selectedReviews.length === 0}
                                >
                                    Check Answers
                                </button>
                                <button 
                                    className="reset-btn"
                                    onClick={resetSelection}
                                >
                                    Reset
                                </button>
                            </>
                        )}
                    </div>

                    {showFeedback && (
                        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <p>{isCorrect ? 'Correct' : 'Not quite'} 
                                {isCorrect ? correctFeedback : incorrectFeedback}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ========================================
// CHECKBOX EXAMPLE
// ========================================
export const CheckboxExample = ({
    instruction,
    options,
    correctFeedback,
    incorrectFeedback,
    onComplete
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleToggle = (optionId) => {
        if (showFeedback) return;

        setSelectedOptions(prev => {
            if (prev.includes(optionId)) {
                return prev.filter(id => id !== optionId);
            } else {
                return [...prev, optionId];
            }
        });
    };

    const handleCheckAnswers = () => {
        const darkPatternIds = options
            .filter(opt => opt.isDarkPattern)
            .map(opt => opt.id);

        const allDarkSelected = darkPatternIds.every(id => selectedOptions.includes(id));
        const noFalseSelected = selectedOptions.every(id => {
            const option = options.find(opt => opt.id === id);
            return option && option.isDarkPattern;
        });

        const isCorrect = allDarkSelected && noFalseSelected;
        setIsCorrect(isCorrect);
        setShowFeedback(true);
        if (onComplete) onComplete(isCorrect);
    };

    const resetSelection = () => {
        if (showFeedback) return;
        setSelectedOptions([]);
    };

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
                <p className="example-stats">
                    Selected: {selectedOptions.length} / {options.filter(o => o.isDarkPattern).length} suspicious items
                </p>
            </div>

            <div className="example-content">
                <div className="checkboxes-container">
                    <div className="checkbox-list">
                        {options.map((option) => {
                            const isSelected = selectedOptions.includes(option.id);
                            const isDarkPattern = option.isDarkPattern;

                            return (
                                <label 
                                    key={option.id} 
                                    className={`checkbox-item ${isSelected ? 'selected' : ''} ${showFeedback && isDarkPattern ? 'highlight-correct' : ''}`}
                                    style={{ cursor: showFeedback ? 'default' : 'pointer' }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleToggle(option.id)}
                                        disabled={showFeedback}
                                    />
                                    <span className="checkbox-label">{option.label}</span>
                                    
                                    {showFeedback && isDarkPattern && (
                                        <span className="checkbox-feedback correct">✓</span>
                                    )}
                                    {showFeedback && isSelected && !isDarkPattern && (
                                        <span className="checkbox-feedback incorrect">✗</span>
                                    )}
                                </label>
                            );
                        })}
                    </div>

                    <div className="checkbox-actions">
                        {!showFeedback && (
                            <>
                                <button 
                                    className="check-answer-btn"
                                    onClick={handleCheckAnswers}
                                    disabled={selectedOptions.length === 0}
                                >
                                    Check Answers
                                </button>
                                <button 
                                    className="reset-btn"
                                    onClick={resetSelection}
                                >
                                    Reset
                                </button>
                            </>
                        )}
                    </div>

                    {showFeedback && (
                        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                            <p>
                                {isCorrect ? 'Correct' : 'Incorrect'} 
                                {isCorrect ? correctFeedback : incorrectFeedback}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// ========================================
// PROGRESSIVE DISCLOSURE EXAMPLE
// ========================================
export const ProgressiveExample = ({
    instruction,
    steps,
    explanation,
    onComplete
}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completed, setCompleted] = useState(false);

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCompleted(true);
            if (onComplete) onComplete(true);
        }
    };

    const resetSteps = () => {
        setCurrentStep(0);
        setCompleted(false);
    };

    const step = steps[currentStep];
    const totalSteps = steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
                <p className="example-stats">
                    Step {currentStep + 1} of {totalSteps}
                </p>
            </div>

            <div className="example-content">
                <div className="progressive-container">
                    <div className="progressive-progress">
                        <div className="progressive-bar">
                            <div className="progressive-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>

                    <div className="step-display">
                        <div className="step-header">
                            <span className="step-number">{step.label}</span>
                            <span className={`step-badge ${step.isDarkPattern ? 'dark' : 'good'}`}>
                                {step.isDarkPattern ? 'Review' : 'Clear'}
                            </span>
                        </div>
                        <div className="step-price">{step.priceDisplay}</div>
                        <p className="step-description">{step.description}</p>
                        {step.reveal && (
                            <div className="step-reveal">{step.reveal}</div>
                        )}
                    </div>

                    <div className="step-actions">
                        {!completed && currentStep < steps.length - 1 && (
                            <button className="next-step-btn" onClick={handleNextStep}>
                                Next Step
                            </button>
                        )}
                        {completed && (
                            <div className="step-final-explanation">
                                <p>{explanation}</p>
                                <button className="reset-btn" onClick={resetSteps}>
                                    Start Over
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ========================================
// CARD FLIP EXAMPLE
// ========================================
export const CardFlipExample = ({ 
    cards = [], 
    instruction,
    onComplete 
}) => {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);

    const handleCardClick = (cardId) => {
        if (matchedPairs.includes(cardId)) return;
        if (flippedCards.includes(cardId)) return;
        if (flippedCards.length === 2) return;
        if (isLocked) return;

        const newFlipped = [...flippedCards, cardId];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setAttempts(attempts + 1);
            setIsLocked(true);

            const card1 = cards.find(c => c.id === newFlipped[0]);
            const card2 = cards.find(c => c.id === newFlipped[1]);

            if (card1.pairId === card2.pairId && newFlipped[0] !== newFlipped[1]) {
                setMatchedPairs([...matchedPairs, card1.pairId]);
                setFlippedCards([]);
                setIsLocked(false);

                if (matchedPairs.length + 1 === cards.length / 2) {
                    if (onComplete) onComplete(true);
                }
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                    setIsLocked(false);
                }, 1000);
            }
        }
    };

    return (
        <div className="interactive-example">
            <div className="example-header">
                <span className="example-badge">Interactive Example</span>
                <p className="example-instruction">{instruction}</p>
                <p className="example-stats">
                    Matches: {matchedPairs.length} / {cards.length / 2} | Attempts: {attempts}
                </p>
            </div>

            <div className="example-content">
                <div className="card-grid">
                    {cards.map((card) => {
                        const isFlipped = flippedCards.includes(card.id);
                        const isMatched = matchedPairs.includes(card.pairId);

                        return (
                            <div 
                                key={card.id}
                                className={`card-item ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
                                onClick={() => handleCardClick(card.id)}
                                style={{ cursor: isMatched || isLocked ? 'default' : 'pointer' }}
                            >
                                <div className="card-inner">
                                    <div className="card-front">
                                        {card.frontContent}
                                    </div>
                                    <div className="card-back">
                                        {card.backContent}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};