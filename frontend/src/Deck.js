import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardsList from "./CardsList";
import Cards from "./Cards";
import DeckbuilderApi from "./Api";


function Deck() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [deck, setDeck] = useState();
    const [deckCards, setDeckCards] = useState(deck);
    const [cardsToUpdate, setCardsToUpdate] = useState([]);
    const [deckCardIds, setDeckCardIds] = useState([]);

    useEffect(() => {
        async function getDeckAndCards() {
            let deck = await DeckbuilderApi.getDeckById(id);
            // if (deck.response.status === 404){
            //     return navigate(`/decks`);
            // }
            let deckCards = await Promise.all(deck.card_ids.map(card_id => {
                return DeckbuilderApi.getCard(card_id);
            }));

            let currentDeckCardIds = deckCards.map(card => {
                card = card.id;
                return card;
            });

            const newDeckCards = deckCards.map(card => {
                card.side = 0;
                return card;
            });
            console.log(newDeckCards);
            setDeck(deck);
            setDeckCards(newDeckCards);
            setDeckCardIds(currentDeckCardIds);
            setIsLoading(false);
        }
        getDeckAndCards();
    }, []);

    if (isLoading) {
        return ( <div>LOADING...</div>);
    }

    async function updateCards() {
        deckCardIds.push('e882c9f9-bf30-46b6-bedc-379d2c80e5cb', '0321b706-87b0-4bea-89d3-ec2e7252dc7c');
        const updatedIds = deckCardIds.map(cardId => (`'${cardId}'`));
        console.log(updatedIds);
        setCardsToUpdate(deckCardIds);
        const result = await DeckbuilderApi.updateDeckCards(deck.id, cardsToUpdate);
        console.log(result);
        // return window.location.reload(true);
        // setDeckCards(result);
        // setDeckCardIds(cards);
        // console.log(result);
        // return navigate (`/decks/${deck.id}`);
    }


    const deleteDeck = async () => {
        const result = await DeckbuilderApi.deleteDeck(deck.id);
        if (result.status === 404) {
            return alert(result.data?.error.message);
        } else {
            alert(`Deleted deck id: ${result}`);
            return navigate('/decks');
        }
    }

    return (
        <div>
            <h2>{deck?.title}</h2>
            <p>{deck?.description}</p>
            <button onClick={updateCards}>Add Selected Cards To Deck</button>
            <button onClick={deleteDeck}>Delete Deck</button>
            <CardsList cards={deckCards} />
            <Cards />
        </div>
    );
}

export default Deck;