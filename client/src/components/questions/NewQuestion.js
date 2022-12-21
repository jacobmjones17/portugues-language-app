import React, { useState } from "react";

function NewQuestion ({ onAddQuestion }) {
    const [formData, setFormData] = useState({
        question: "",
        definition: "",
        word: "",
        palavra: ""
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
            "definition": formData.definition,
            "word": formData.word,
            "palavra": formData.palavra
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
            })
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
                        required
                    />
                </label>
                <label>
                    Definition:
                    <input
                        type="text"
                        name="definition"
                        value={formData.definition}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    English Answer:
                    <input
                        type="text"
                        name="word"
                        value={formData.word}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Portuguese Answer:
                    <input
                        type="text"
                        name="palavra"
                        value={formData.palavra}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit Question</button>
            </form>
            </div>
        </section>
    );
}

export default NewQuestion;
