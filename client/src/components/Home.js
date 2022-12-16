import React, {useState} from "react";
import "./Home.css"

function Home( { loggedIn, currentUser, users, questions } ) {
    const [formData, setFormData] = useState({
        correctIndex: 0,
      });
      // console.log(users)

    const [checked, setChecked] = useState(false);
    
    const handleCheckBox = () => {
        setChecked(!checked);
    };

    const allQuestions = questions.map((question) => <label> <li> <input type="checkbox" onChange={handleCheckBox}/> {question.question} </li> </label>)
    const allStudents = users.map((user) => !user.admin ? <option value={user.username}>{user.username} </option> : null)
    const user = users.map((user) => user)

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

      // function handleAssign(event) {
      //   event.preventDefault()
        
      // }

    const loggedInHome = () => {
          if (user.admin === true) {
              <div className="description">
                <p>Welcome! Assign Questions for Each Student!</p>
                <select
                name="correctIndex"
                value={formData.correctIndex}
                onChange={handleChange}
                >
                <option value="Select Student">Select Student</option>
                  {allStudents}
                </select>
                  {allQuestions}
                <button>Assign</button>
              </div>
          } else {
            <div className="description">
                <p>Welcome! Click on the Quiz to start learning</p>
            </div>
          }

      const loggedOutHome = () => {
        return (
            <div className="description">
                <p>Bem-vindo! Aprenda a Falar Fluentemente Rapidamente</p>
            </div>
        )
      }

    return (
        <div> { loggedIn ? loggedInHome() : loggedOutHome() } </div>
    )
}
}

export default Home;