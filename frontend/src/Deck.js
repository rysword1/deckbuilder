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

    useEffect(() => {
        async function getDeckAndCards() {
            let deck = await DeckbuilderApi.getDeckById(id);
            // if (deck.response.status === 404){
            //     return navigate(`/decks`);
            // }


            let cardCount = {};
            for(const card_id of deck.card_ids) {
                if(cardCount[card_id]) {
                    cardCount[card_id]++;
                } else {
                    cardCount[card_id] = 1;
                }
            }

            let deckCards = [];

            for(const card_id in cardCount) {
                const card = await DeckbuilderApi.getCard(card_id);
                card.count = cardCount[card_id];
                card.side = 0
                deckCards.push(card);
            }

            setDeck(deck);
            setDeckCards(deckCards);
            setIsLoading(false);
        }
        getDeckAndCards();
    }, []);

    if (isLoading) {
        return ( <div>LOADING...</div>);
    }

    const updateDeckCards = (card) => {
        const originalCard = deckCards.find(c => c.id === card.id);
        if(originalCard) {
            originalCard.count = card.count;
        } else {
            deckCards.push(card);
        }
    }

    const updateCards = async () => {
        const newDeckCards = [];
        for(const card of deckCards) {
            if(card.count > 0) {
                for(let i = 0; i < card.count; i++) {
                    newDeckCards.push(card.id);
                }
            }
        }
        await DeckbuilderApi.updateDeckCards(deck.id, newDeckCards);
        return window.location.reload(true);
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
            <CardsList cards={deckCards} updateDeckCards={updateDeckCards} />
            <Cards updateDeckCards={updateDeckCards} deckCards={deckCards} />
        </div>
    );
}

export default Deck;