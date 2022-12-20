import React, { useState } from "react";

function NewQuestion ({ onAddQuestion }) {
    const [formData, setFormData] = useState({
        question: "",
    });

    const [ incorrectAnswers, setIncorrectAnswers ] = useState(["", "", ""]):

function updateIncorrectAnswers(event, index){
    const updatedAnswers = incorrectAnswers.map((answer, i) => {
        if(i === index){
            return event.target.value
        }
    })
    setIncorrectAnswers(updatedAnswers)
}

const wrongAnswerInputs = incorrectAnswers.map((value, index) => {
    return (
        <input
            key={index}
            value={value}
            onChange={() => {updateIncorrectAnswers(e, index)}}
        />
    )
})

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newQuestionInfo = {
            "question": formData.question,
        }
        fetch("/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuestionInfo)
        })
            .then((response) => response.json())
            .then((newQuestion) => {
                onAddQuestion(newQuestion)
                setFormData({
                question: "",
            })})
    }

    

    return (
        <section>
            <div className="questionform">
            <h1>New Question</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Question:
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Answer:
                    <input
                        type="text"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Incorrect Answer 1:
                    <input
                        type="text"
                        name="incorrectanswer"
                        value={formData.incorrectAnswer1}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Incorrect Answer 2:
                    <input
                        type="text"
                        name="incorrectanswer"
                        value={formData.incorrectAnswer2}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Incorrect Answer 2:
                    <input
                        type="text"
                        name="incorrectanswer"
                        value={formData.incorrectAnswer2}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit Question</button>
            </form>
            </div>
        </section>
    );
}

export default NewQuestion;
