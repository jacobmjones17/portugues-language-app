import React from "react";
import { useNavigate } from "react-router-dom"
import "./Home.css"

function Home( { recipes, onDeleteRecipe, onAddRecipe } ) {
    const navigate = useNavigate()


    return (
        <div className="description">
            <p>Store all your favorite recipes here!</p>
            <button className="add-recipe" type="submit" onClick={() => navigate("/recipes/create")}>Add Recipe</button>
            <div className="recipe-container">
            </div>
        </div>
    )
}

export default Home