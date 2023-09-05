import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardsList from "./CardsList";
import Cards from "./Cards";
import DeckbuilderApi from "./Api";


function Deck() {

    let navigate = useNavigate();

    const { id } = useParams();

    let cardsToAdd = [];

    const [isLoading, setIsLoading] = useState(true)
    const [deck, setDeck] = useState();
    const [cards, setCards] = useState(deck);

    useEffect(() => {
        async function getDeckAndCards() {
            let deck = await DeckbuilderApi.getDeckById(id);
            // if (deck.response.status === 404){
            //     return navigate(`/decks`);
            // }
            let cards = await Promise.all(deck.card_ids.map(card_id => {
                return DeckbuilderApi.getCard(card_id);
            }));
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

    // async function cardSearch(query) {
    //     let result = await axios.get(`https://api.scryfall.com/cards/search${query}`);
    //     const newCards = result.data.data.map(card => {
    //         card.side = 0;
    //         return card;
    //     });
    //     console.log(newCards);
    //     setCurrentCards(newCards);
    //     return <CardsList cards={newCards} />
    // }

    async function updateDeckCards(cardsToAdd) {
        const result = await DeckbuilderApi.updateDeckCards(deck.id, cardsToAdd);
        setCards(result);
        return navigate (`/decks/${deck.id}`);
    }

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