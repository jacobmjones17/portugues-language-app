import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Signup from "./components/singup/Signup";
import NavBar from "./components/NavBar"
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import CardForm from "./components/flashcards/CardForm";
import CardList from "./components/flashcards/CardList";
import Home from "./components/Home";
import "./App.css"


function App() {

    // const [quiz, setQuiz] = useState([]);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

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

      // fetch("/quiz")
      // .then((response) => response.json())
      // .then((quiz) => setQuiz(quiz))
    }, []);



  return (
    <div>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user}/>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiz" element={<QuestionList />} />
      <Route path="/flashcards" element={<CardList />} />
      <Route path="/addquestion" element={<QuestionForm />} />
      <Route path="/addflashcard" element={<CardForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
