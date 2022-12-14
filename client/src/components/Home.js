import React from "react";

function Home({loggedIn, currentUser}) {

    const loggedInHome = () => {
        return (
            <div className="description">
                <p>Welcome! Click on the Quiz to start learning</p>
            </div>
        );
      };

      const loggedOutHome = () => {
        return (
            <div className="description">
                <p>Bem-vindo! Aprenda a Falar Fluentemente Rapidamente</p>
            </div>
        )
      }

    return (
        <div>{loggedIn ? loggedInHome() : loggedOutHome()}</div>
    )
}

export default Home