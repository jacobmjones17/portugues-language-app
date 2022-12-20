import React, {useState, useEffect, useContext} from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Signup from "./components/singup/Signup";
import NavBar from "./components/navbar/NavBar"
import QuestionList from "./components/questions/QuestionList";
import Home from "./components/Home";
import EditQuestion from "./components/questions/EditQuestion";
import NewQuestion from "./components/questions/NewQuestion";
import "./App.css"
import { UserContext } from "./components/context/User"



function App() {
    const [questions, setQuestions] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    // const [answers, setAnswers] = useState([])
    const [users, setUsers] = useState([]);
    const { user, setUser } = useContext(UserContext);

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
      .then((response) => {
          if (response.ok) {
              response.json()
              .then((user) => loginUser(user))
          }
      });

      fetch("/questions")
        .then((response) => response.json())
        .then((questions) => setQuestions(questions))

      fetch("/users")
        .then((response) => response.json())
        .then((users) => setUsers(users))
    }, []);


    function handleUpdateRecipe(updatedQuestion) {
      const updatedQuestions = questions.map((question) => {
          if (question.id === updatedQuestion.id) {
              return updatedQuestion
          } else {
              return question
          }
      });
      setQuestions(updatedQuestions)
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
}


    function handleDeleteQuestion(id) {
      const updatedQuestions = questions.filter((question) => question.id !== id);
      setQuestions(updatedQuestions)
  }


  return (
    <div>
      <NavBar loggedIn={loggedIn} logoutUser={logoutUser} currentUser={user}/>
      <Routes>
      <Route path="questions/:id/edit" element={<EditQuestion onUpdateQuestion={handleUpdateRecipe} questions={questions}/>}/>
      <Route path="/login" element={<Login onLogin={loginUser}/>} />
      <Route path="/signup" element={<Signup onLogin={loginUser}/>} />
      <Route path="/quiz" element={<QuestionList questions={questions}/>} />
      <Route path="/questions/create" element={<NewQuestion onAddQuestion={handleAddQuestion}/>} />
      <Route path="/" element={<Home loggedIn={loggedIn} currentUser={user} users={users} questions={questions} onDeleteQuestion={handleDeleteQuestion}/>} />
    </Routes>
    </div>
  );
}

export default App;
