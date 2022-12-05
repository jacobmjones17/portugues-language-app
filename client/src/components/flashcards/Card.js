import React, { useState } from "react";


function Card({ flashcard }) {
    const [flip, setFlip] = useState(false)


    return (
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >
            <div className="front"> {flashcard.prompt} </div>
            <div className="back"> {flashcard.answer} </div>
        </div>

    )
}




export default Card;