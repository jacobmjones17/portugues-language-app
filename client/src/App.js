import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Signup from "./components/singup/Signup";
import NavBar from "./components/navbar/NavBar"
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import Home from "./components/Home";
import "./App.css"


function App() {
    const [questions, setQuestions] = useState([]);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    // const [answers, setAnswers] = useState([])
    const [users, setUsers] = useState([])

    const loginUser = (currentUser) => {
      setUser(currentUser);
      setLoggedIn(true)
    };

    const logoutUser = () => {
      setUser({});
      setLoggedIn(false);
    };

    useEffect(() => {
      fetch("/me")
      .then((response) => {;
          if(response.ok) {
              response.json().then((user) => loginUser(user))
          }
      });

      // console.log(user)

        fetch("/questions")
        .then((response) => response.json())
        .then((questions) => setQuestions(questions))

        // fetch("/meanings")
        // .then((response) => response.json())
        // .then((answers) => setAnswers(answers))

        fetch("/users")
        .then((response) => response.json())
        .then((users) => setUsers(users))
    }, []);

    // console.log(answers)



  return (
    <div>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user}/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={<QuestionList questions={questions}/>} />
      <Route path="/addquestion" element={<QuestionForm />} />
      <Route path="/" element={<Home loggedIn={loggedIn} currentUser={user} users={users}/>} />
    </Routes>
    </div>
  );
}

export default App;
