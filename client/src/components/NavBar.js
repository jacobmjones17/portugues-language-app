import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logout from "./logout/Logout";

const linkStyles = {
    display: "inline-block",
    width: "105px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "rgba(77, 73, 73, 0.329)",
    textDecoration: "none",
    color: "rgb(107, 255, 255)",
};

function NavBar( { loggedIn, logoutUser, currentUser } ) {

    const navigate = useNavigate()

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then(() => {
            navigate("/")
            logoutUser();
        })
    }

    const loggedinNav = () => {
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
    <Logout handleLogout={handleLogout}/>
    </div>
        )
    }

    const loggedOutNav = () => {
        <nav>
            <a href="/">Portuguese Language App</a>
            <div>
                <p>Welcome, <span>Guest</span></p>
            </div>
        </nav>
    }
    
    return ( 
        <div> {loggedIn ? loggedOutNav() : loggedOutNav()} </div>
    )
}

export default NavBar;