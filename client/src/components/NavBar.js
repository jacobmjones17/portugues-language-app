import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "105px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "rgba(77, 73, 73, 0.329)",
    textDecoration: "none",
    color: "rgb(107, 255, 255)",
};

function NavBar() {
    return ( 
    <div>
    <NavLink
        to="/"
        exact
        style={linkStyles}
    >
        Home
    </NavLink>
    <NavLink
        to="/quiz"
        exact
        style={linkStyles}
    >
        Quiz
    </NavLink>
    <NavLink
        to="/flashcards"
        style={linkStyles}
    >
        Flash Cards
    </NavLink>
    <NavLink
        to="/addquestion"
        exact
        style={linkStyles}
        
    >
        Add Question
    </NavLink>
    <NavLink
        to="/addflashcard"
        exact
        style={linkStyles}
    >
        Add Flash Card
    </NavLink>
    </div>
    )
}

export default NavBar;