import React, {useState} from "react";
import "./Home.css"

function Home( { loggedIn, currentUser, users, questions } ) {
    const [formData, setFormData] = useState({
        correctIndex: 0,
      });

    const [checked, setChecked] = useState(false);
    
    const handleCheckBox = () => {
        setChecked(!checked);
    };

    const allQuestions = questions.map((question) => <label> <li> <input type="checkbox" onChange={handleCheckBox} key={question.id}/> {question.question} </li> </label>)
    // Make sure that Users is an array
    const allStudents = () => {
      if (users) {
        return(
      users.map((user) => !user.admin ? <option value={user.username} key={user.id} >{user.username} </option> : null)
        )
      } else {
        return (null)
      }
    }

    console.log(users)
  

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      function handleAssign(event) {
        event.preventDefault()
        
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
                <select
                name="correctIndex"
                value={formData.correctIndex}
                onChange={handleChange}
                >
                  <option value="Select Student">Select Student</option>
                    {allStudents()}
                  </select>
                    {allQuestions}
                  <button>Assign</button>
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