import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import QuestionList from "./components/questions/QuestionList"
import QuestionForm from "./components/questions/QuestionForm"
import CardForm from "./components/flashcards/CardForm"
import CardList from "./components/flashcards/CardList"
import Home from "./components/Home";
import './App.css';

const App = () => {
    const [questions, setQuestions] = useState([]);
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

        fetch("/questions")
        .then((response) => response.json())
        .then((recipes) => setRecipes(recipes))
    }, []);

    function handleDeleteRecipe(id) {
        const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
        setRecipes(updatedRecipes)
    }

    function handleUpdateRecipe(updatedRecipe) {
        const updatedRecipes = recipes.map((recipe) => {
            if (recipe.id === updatedRecipe.id) {
                return updatedRecipe
            } else {
                return recipe
            }
        });
        setRecipes(updatedRecipes)
    }


    function handleAddRecipe(newRecipe) {
        setRecipes([...recipes, newRecipe]);
    }



return (
    <div className="App">
    <Routes>
        <Route path="quiz" element={<QuestionList />} />
        <Route path="flashcards" element={<CardList />} />
        <Route path="addquestion" element={<QuestionForm />} />
        <Route path="addflashcard" element={<CardForm />} />
        <Route path="/" element={<Home />} />
    
    </Routes>
    </div>
)

}

export default App;
