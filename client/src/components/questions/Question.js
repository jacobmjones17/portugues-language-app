import React, { useEffect, useState } from "react";
import "./Question.css"

function Question({ currentQuestion, onAnswered, currentUser }) {
    const [timeRemaining, setTimeRemaining] = useState(10);

    useEffect(() => {
        if (timeRemaining === 0) {
            setTimeRemaining(10)
            onAnswered(false)
            return;
        }

        // const userQuestions = currentUser.questions.map((question) => question)
        // const userQuestionId = userQuestions.map((question) => question.id)
        // const userQuestion = userQuestions.map((question) => question.question)


        
        // console.log(userQuestions)
        // console.log(userQuestionId)
        // console.log(userQuestion)

        // const userQuestionss = currentUser.questions.map((question) => 
        // <div className="quiz">
        //     <h1>Question {question.id}</h1>
        //     <h3>{question.question}</h3>
        //     <h5> {timeRemaining} seconds remaining </h5>
        // </div> 
    // )

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
        <div className="quiz">
            <h1> Question {id}</h1>
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
        </div>
    );
}

export default Question;