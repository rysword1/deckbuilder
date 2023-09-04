import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsList from "./CardsList";
import Cards from "./Cards";
import DeckbuilderApi from "./Api";


function Deck() {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [deck, setDeck] = useState();
    const [cards, setCards] = useState(deck);


    useEffect(() => {
        async function getDeckAndCards() {
            let deck = await DeckbuilderApi.getDeckById(id);
            let cards = await Promise.all(deck.card_ids.map(card_id => {
                return DeckbuilderApi.getCard(card_id);
            }));
            // if (deck.card_ids == undefined) {
            //     let cards = [];
            //     return cards;
            // } else {
            //     let cards = await Promise.all(deck.card_ids.map(card_id => {
            //         return DeckbuilderApi.getCard(card_id);
            //     }));
            // }
            console.log(cards);
            const deckCards = cards.map(card => {
                card.side = 0;
                return card;
            });
            console.log(deckCards);
            setDeck(deck);
            setCards(deckCards);
            setIsLoading(false);
        }
        getDeckAndCards();
    }, []);

    if (isLoading) {
        return ( <div>LOADING...</div>);
    }
    
    // if (!deck) return <Navigate to="http://localhost:3000/decks" />;

    // on submit delete deck 
    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    // }

    return (
        <div>
            <h2>{deck?.title}</h2>
            <p>{deck?.description}</p>
            <CardsList cards={cards} />
            <Cards />
        </div>
    );
}

export default Deck;