import React, { useState } from 'react';

const MCQTest = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleAnswerSelect = (answer) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = answer;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = () => {
        console.log(selectedAnswers);
        // Send selectedAnswers to backend
    };

    return (
        <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerSelect(option)}>{option}</button>
            ))}
            {currentQuestion < questions.length - 1 && <button onClick={handleNext}>Next</button>}
            {currentQuestion === questions.length - 1 && <button onClick={handleSubmit}>Submit</button>}
        </div>
    );
};

export default MCQTest;

