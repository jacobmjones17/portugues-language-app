import React, { useState } from "react";
import Question from "./Question";
import "./Question.css"


function QuestionList({ questions }) {
    
    const [currentQuestionId, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const individualQuestion = questions.map((q) => q)
    const currentQuestion = individualQuestion.find((q) => q.id === currentQuestionId);

    function handleQuestionAnswered(correct) {
        if (currentQuestionId < questions.length) {
            setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
        } else {
            setCurrentQuestion(null);
        }
        if (correct) {
            setScore((score) => score + 1);
        }
    }


    return (
        <main>
            <section className="quizspacer">
                <div className="innerspacer">
                {currentQuestion ? (
                        <Question
                        currentQuestion={currentQuestion}
                        onAnswered={handleQuestionAnswered}
                    />
                ) : (
                    <>
                        <h1>Quiz Complete</h1>
                        <h2>Total Correct: {((score/questions.length) * 100)}%</h2>
                    </>
                )}
                </div>
            </section>
        </main>
    );
}

export default QuestionList;