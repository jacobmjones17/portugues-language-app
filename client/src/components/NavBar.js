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
        to="/addquestion"
        exact
        style={linkStyles}
        
    >
        Add Question
    </NavLink>
    <Logout handleLogout={handleLogout}/>
    </div>
        )
    }

    const loggedOutNav = () => {
        return(
        <nav>
            <a href="/">Portuguese Language App</a>
            <button onClick = {() => navigate("/login")}> Login </button>
            <button onClick = {() => navigate("/signup")}> Signup </button>
        </nav>
        )
    }
    
    return ( 
        <div> {loggedIn ? loggedinNav() : loggedOutNav()} </div>
    )
}

export default NavBar;