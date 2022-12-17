import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    question: "",
    correctAnswer: ""
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
      "qusetion": formData.question,
      "correctAnswer": formData.correctAndex
    }

    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestionInfo)
    })
      .then((response) => response.json())
      .then((newQuestion) => setFormData({
        question: "",
        correctAnswer: "",
      }))
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
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct Answer:
          <input
            type="text"
            name="correctAnswer"
            value={formData.answer1}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Question</button>
      </form>
      </div>
    </section>
  );
}

export default QuestionForm;
