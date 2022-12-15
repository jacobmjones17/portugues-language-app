import React, {useState} from "react";
import "./Home.css"

function Home({loggedIn, currentUser, users}) {
    const [formData, setFormData] = useState({
        correctIndex: 0,
      });

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    const allStudents = users.map((user) => <option value={user.username}>{user.username}</option>)

    const loggedInHome = () => {
        return (
            <div className="description">
                <p>Welcome! Click on the Quiz to start learning</p>
            <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
            >
            {allStudents}
          </select>
            </div>
        );
      };

      const loggedOutHome = () => {
        return (
            <div className="description">
                <p>Bem-vindo! Aprenda a Falar Fluentemente Rapidamente</p>
            </div>
        )
      }

    return (
        <div>{loggedIn ? loggedInHome() : loggedOutHome()}</div>
    )
}

export default Home