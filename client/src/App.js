import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
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

      // fetch("/quiz")
      // .then((response) => response.json())
      // .then((quiz) => setQuiz(quiz))
    }, []);



  return (
    <div>
      <h1 className="title">Portuguese Language App</h1>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user}/>
      <Routes>
      <Route path="quiz" element={<QuestionList />} />
      <Route path="signup" element={<QuestionList />} />
      <Route path="flashcards" element={<CardList />} />
      <Route path="addquestion" element={<QuestionForm />} />
      <Route path="addflashcard" element={<CardForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
