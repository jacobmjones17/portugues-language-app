import React, { useState } from "react";

function NewQuestion ({ onAddQuestion }) {
    const [formData, setFormData] = useState({
        question: "",
    });

    const [answerList, setAnswerList] = useState([{ definition: "", word: "", palavra: "" }])

    const [ incorrectAnswers, setIncorrectAnswers ] = useState(["", "", ""]);

    function updateIncorrectAnswers(event, index){
        const updatedAnswers = incorrectAnswers.map((answer, i) => {
            if(i === index){
                return event.target.value
            } else {
                return answer
            }
        })
        setIncorrectAnswers(updatedAnswers)
    }

    const wrongAnswerInputs = incorrectAnswers.map((value, index) => {
        return (
            <label>
                Incorrect Answer {index + 1}
                <input
                    key={index}
                    value={value}
                    onChange={ (e) => {updateIncorrectAnswers(e, index)}}
                    required
                />
            </label>
        )
    })


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleMeaningChange(event) {
        setAnswerList({
            ...answerList,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newQuestionInfo = {
            "question": formData.question,
            "inccorect_answer_one": incorrectAnswers[0],
            "inccorect_answer_two": incorrectAnswers[1],
            "inccorect_answer_three": incorrectAnswers[2],
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
                        required
                    />
                </label>
                <label>
                    Definition:
                    <input
                        type="text"
                        name="question"
                        value={answerList.definition}
                        onChange={handleMeaningChange}
                        required
                    />
                </label>
                <label>
                    English Answer:
                    <input
                        type="text"
                        name="englishanswer"
                        value={answerList.word}
                        onChange={handleMeaningChange}
                        required
                    />
                </label>
                <label>
                    Portuguese Answer:
                    <input
                        type="text"
                        name="portugueseanswer"
                        value={answerList.palavra}
                        onChange={handleMeaningChange}
                        required
                    />
                </label>
                {wrongAnswerInputs}
                <button type="submit">Submit Question</button>
            </form>
            </div>
        </section>
    );
}

export default NewQuestion;
