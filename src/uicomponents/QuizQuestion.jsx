
import React from "react";

const QuizQuestion = ({
    question,
    questionNumber,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    isSubmitted,
}) => {
    const letters = ["A", "B", "C", "D"];
    const correctAnswer = question.correct_answer;
    const isCorrect = selectedAnswer === correctAnswer;

    return (
        <div className="quiz-question">
            <div className="question-header">
                <span className="question-number">
                    Question {questionNumber} of {totalQuestions}
                </span>
                <h3>{question.question}</h3>
            </div>

            <div className="options-list">
                {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectOption = index === correctAnswer;

                    let optionClass = "option";
                    if (isSubmitted) {
                        if (isCorrectOption) {
                            optionClass += " correct";
                        } else if (isSelected && !isCorrectOption) {
                            optionClass += " incorrect";
                        } else {
                            optionClass += " disabled";
                        }
                    } else if (isSelected) {
                        optionClass += " selected";
                    }

                    return (
                        <div
                            key={index}
                            className={optionClass}
                            onClick={() => !isSubmitted && onSelectAnswer(index)}
                            style={{
                                cursor: !isSubmitted ? 'pointer' : 'default'
                            }}
                        >
                            <div className="option-letter">{letters[index]}</div>
                            <div className="option-text">{option}</div>
                            {isSubmitted && isCorrectOption && (
                                <div className="option-check">✅</div>
                            )}
                            {isSubmitted && isSelected && !isCorrectOption && (
                                <div className="option-cross">❌</div>
                            )}
                        </div>
                    );
                })}
            </div>

            {isSubmitted && question.explanation && (
                <div className={`explanation ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <strong>{isCorrect ? '✅ Correct!' : '❌ Not quite.'}</strong>
                    <p>{question.explanation}</p>
                </div>
            )}
        </div>
    );
};

export default QuizQuestion;