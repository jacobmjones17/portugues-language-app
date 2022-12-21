import React, { useState } from "react";

function NewQuestion ({ onAddQuestion }) {
    const [formData, setFormData] = useState({
        question: "",
    });

    const generalVariable = {}

    const [answerList, setAnswerList] = useState([{ definition: "", word: "", palavra: "" }])

    const handleAnswerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...answerList];
    list[index][name] = value;
    setAnswerList(list);
    };


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleMeaningChange(event) {
        
        setAnswerList([{
            ...answerList,
            [event.target.name]: event.target.value
        }])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newQuestionInfo = {
            "question": formData.question,
            "meaning_attributes": answerList
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
                        value={answerList.definition}
                        onChange={handleMeaningChange}
                        required
                    />
                </label>
                <label>
                    English Answer:
                    <input
                        type="text"
                        name="word"
                        value={answerList.word}
                        onChange={handleMeaningChange}
                        required
                    />
                </label>
                <label>
                    Portuguese Answer:
                    <input
                        type="text"
                        name="palavra"
                        value={answerList.palavra}
                        onChange={handleMeaningChange}
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
