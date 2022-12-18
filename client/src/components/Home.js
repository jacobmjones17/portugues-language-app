import React, {useState} from "react";
import "./Home.css"

function Home( { loggedIn, currentUser, users, questions, onDeleteQuestion } ) {
    const [student, setStudent] = useState(0);
    const [checked, setChecked] = useState(false);
    const [assignedQuestions, setAssignedQuestions] = useState([]);
    
    function handleCheckBox(question) {
      setChecked(!checked);
      if(!assignedQuestions.find( q => q === question)) {
        setAssignedQuestions([...assignedQuestions, question]);
      } else {
        setAssignedQuestions([...assignedQuestions.filter( q => q !== question)]);
      }
  };

    function handleDeleteClick(individualQuestion, event) {
      event.preventDefault()
      fetch(`/questions/${individualQuestion.id}`, {
          method: "DELETE",
      });
      onDeleteQuestion(individualQuestion.id)
  }

  const allQuestions = () => {
    if (questions) {
      return (
        questions.map((question) => 
          <label> 
            <li>
              <input type="checkbox" onChange={() => handleCheckBox(question.id)} key={question.id}/> {question.question}
              <button onClick={(event) => handleDeleteClick(question, event)}>
                ✖
              </button>
            </li>
          </label>
        )) 
      } else {
        return (null)
      }
    }

    function handleChange(event) {
      console.log(event)
      setStudent(event.target.id)
      setStudent({
        ...student,
        [event.target.name]: event.target.value,
      });
    }



function handleQuestionAssignment(event) {
  event.preventDefault()
  const studentObject = {"student": student, "questions": assignedQuestions}
  fetch("/questions", {
  method: "PATCH",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(studentObject),
  })
  .then((response) => response.json())
}
    
const allStudents = () => {
  if (users) {
    return(
  users.map((user) => !user.admin ? <option value={user.username} key={user.id} >{user.username} </option> : null)
    )
  } else {
    return (null)
  }
}

  const loggedInHome = () => {
    if (!loggedIn){
      return (
              <div className="description">
                  <p>Bem-vindo! Aprenda a Falar Fluentemente Rapidamente</p>
              </div>
      )
  } else if (loggedIn && currentUser.admin){
      return(
            <div className="teacher-description">
              <p>Welcome! Assign Questions for Each Student!</p>
              <form onSubmit={handleQuestionAssignment}>
                <select
                  name="correctIndex"
                  value={student.correctIndex}
                  onChange={handleChange}
                >
                <option value="Select Student">Select Student</option>
                  {allStudents()}
                </select>
                  {allQuestions()}
                <button type="submit">Assign</button>
              </form>
            </div>
      )
  } else {
      return (
            <div className="student-description">
              <p>Welcome! Click on the Quiz to start learning</p>
            </div>
      )
  }
}   

    return (
        loggedInHome()
    )

}

export default Home;