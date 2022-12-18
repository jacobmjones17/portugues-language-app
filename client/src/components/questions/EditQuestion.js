import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditQuestion ({ questions, onUpdateQuestion }) {
    const params = useParams();

    const parsedParams = parseInt(params.id)

    const questionToEdit = questions.find(question => {
        return question.id === parsedParams
    })

    const [formData, setFormData] = useState({
        question: questionToEdit.question,
    });


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            
        });
    };
            

    function handleFormSubmit(e) {
        e.preventDefault();
        const updatedObject = {...formData}
        fetch(`/questions/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
        })
        .then((response) => response.json())
        .then((updatedQuestion) => onUpdateQuestion(updatedQuestion))
    }
    
    return (
        <section>
            <div className="recipeform">
            <h1>Edit Recipe</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Question:
                    <input
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Confirm Edit</button>
            </form>
            </div>
        </section>
    );
}

export default EditQuestion;
