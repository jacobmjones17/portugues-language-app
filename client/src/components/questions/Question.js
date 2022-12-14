import React, { useEffect, useState } from "react";

function Question({ currentQuestion, onAnswered }) {
    const [timeRemaining, setTimeRemaining] = useState(10);

    useEffect(() => {
        if (timeRemaining === 0) {
            setTimeRemaining(10)
            onAnswered(false)
            return;
        }

        const timerId = setTimeout(() => {
            setTimeRemaining((seconds) => seconds - 1);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [timeRemaining, onAnswered])

    // function handleAnswer(isCorrect) {
    //     setTimeRemaining(10);
    //     onAnswered(isCorrect);
    // }

    const { id, question } = currentQuestion;

    return (
        <>
            <h1>Question {id}</h1>
            <h3>{question}</h3>
            {/* {answers.map((answer, index) => {
                const isCorrect = index === correctIndex;
                return (
                    <button key={answer}  className="button" onClick={() => handleAnswer(isCorrect)}>
                        {answer}
                    </button>
                );
            })} */}
            <h5>{timeRemaining} seconds remaining</h5>
        </>
    );
}

export default Question;