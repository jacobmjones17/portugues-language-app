import React, {useState} from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home( { loggedIn, currentUser, users, questions, onDeleteQuestion } ) {
    const [student, setStudent] = useState(0);
    const [checked, setChecked] = useState(false);
    const [assignedQuestions, setAssignedQuestions] = useState([]);
    const navigate = useNavigate()
    
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
          <label key={question.id}> 
            <li>
              <input type="checkbox" onChange={() => handleCheckBox(question.id)}/> {question.question}
              <button onClick={(event) => handleDeleteClick(question, event)}>
                ✖
              </button>
              <button onClick={() => navigate(`questions/${question.id}/edit`)}>Edit</button>
            </li>
          </label>
        )) 
      } else {
        return (null)
      }
    }

function handleChange(userId) {
    setStudent(users.find( (u) => userId === u.id));
    
}

//use useEffect to wait for student to be updated before sending it. 
  

function handleQuestionAssignment(event) {
  event.preventDefault()
  assignedQuestions.forEach((question) => {
    let studentObject={"user_id": student.id, "question_id": question}
  
  fetch("/assignment", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(studentObject),
  })
  .then((response) => response.json())
})
}
    
const allStudents = () => {
  if (users) {
    return(
  users.map((user) => !user.admin ? <option value={user.id} key={user.id} id={user.id}>{user.username} </option> : null)
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
                  onChange={(e) => handleChange(e.target.value)}
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