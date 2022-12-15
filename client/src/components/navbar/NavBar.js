import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar( { loggedIn, logoutUser, currentUser } ) {
    
    const linkStyles = {
        display: "inline-block",
        width: "118px",
        padding: "8px",
        margin: "0 6px 2px",
        background: "rgb(255, 255, 0)",
        textDecoration: "none",
        color: "rgb(0, 0, 0)",
        fontWeight: "900",
        textAlign: "center"
    };

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
            <div className="navlinks">
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
    <button className="Logout" onClick={handleLogout}>Logout</button>
    </div>
        )
    }

    const loggedOutNav = () => {
        return(
        <nav>
            <a href="/">Portuguese Language App</a>
            <div className="buttons" >
                <button className="Login" onClick = {() => navigate("/login")}> Login </button>
                <button className="Signup" onClick = {() => navigate("/signup")}> Signup </button>
            </div>
        </nav>
        )
    }
    
    return ( 
        <div> {loggedIn ? loggedinNav() : loggedOutNav()} </div>
    )
}

export default NavBar;