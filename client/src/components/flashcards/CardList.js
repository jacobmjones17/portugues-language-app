import React, { useState, useEffect } from "react";
import Card from "./Card";


function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/flashcards")
            .then((response) => response.json())
            .then((cards) => setCards(cards))
    }, [])


    return (
        <div className="card-grid">
            {cards.map(flashcard => {
                return <Card flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    );
}


export default CardList