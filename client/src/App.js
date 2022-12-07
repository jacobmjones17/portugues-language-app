import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import QuestionList from "./components/questions/QuestionList";
import QuestionForm from "./components/questions/QuestionForm";
import CardForm from "./components/flashcards/CardForm";
import CardList from "./components/flashcards/CardList";
import Home from "./components/Home";
import "./App.css"


function App() {

  return (
    <div>
      <h1 className="title">Portuguese Language App</h1>
      <NavBar />
      <Routes>
      <Route path="quiz" element={<QuestionList />} />
      <Route path="flashcards" element={<CardList />} />
      <Route path="addquestion" element={<QuestionForm />} />
      <Route path="addflashcard" element={<CardForm />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
