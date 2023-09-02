import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Card from "./Card";
import DeckbuilderApi from "./Api";


function Deck() {

    const { id } = useParams();

    const [deck, setDeck] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function getDeckAndCards() {
            let deck = await DeckbuilderApi.getDeckById(id);
            deck.cards = await Promise.all(deck.card_ids.map(card_id => {
                return DeckbuilderApi.getCard(card_id);
            }));
            console.log(deck.cards.toString());
            setDeck(deck);
            setCards(deck.cards);
        }
        getDeckAndCards();
    }, []);
    
    // if (!deck) return <Navigate to="http://localhost:3000/decks" />;

    // on submit delete deck 
    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    // }

    return (
        <div>
            <h2>{deck?.title}</h2>
            <p>{deck?.descr}</p>
            <ol>
                {cards?.map(card => {
                    <Card card={card} />
                })}
            </ol>
        </div>
    );
}

export default Deck;