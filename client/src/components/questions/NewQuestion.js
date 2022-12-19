import React, { useState } from "react";

function NewQuestion ({ onAddQuestion }) {
    const [formData, setFormData] = useState({
        question: "",
    });

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
                <button type="submit">Submit Question</button>
            </form>
            </div>
        </section>
    );
}

export default NewQuestion;
