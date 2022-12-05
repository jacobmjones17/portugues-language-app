import React, { useEffect, useState } from "react";
import Question from "./Question";


function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionId, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const currentQuestion = questions.find((q) => q.id === currentQuestionId);


    useEffect(() => {
        fetch("http://localhost:3000/questions")
        .then((response) => response.json())
        .then((questions) => setQuestions(questions))
    }, [])

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
                        question={currentQuestion}
                        onAnswered={handleQuestionAnswered}
                    />
                ) : (
                    <>
                        <h1>Quiz Complete</h1>
                        <h2>Total Correct: {score}/{questions.length}</h2>
                    </>
                )}
                </div>
            </section>
        </main>
    );
}

export default QuestionList;