import React, { useState, useEffect } from "react";
import { List, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import { Link } from "react-router-dom";
import DeckbuilderApi from "./Api";


function Decks({ decks }) {

    const [currentDecks, setCurrentDecks] = useState(decks);

    useEffect(() => {
        async function getDecks() {
            let newDecks = await DeckbuilderApi.getAllDecks();
            setCurrentDecks(newDecks);
        }
        getDecks();
    }, []);
    
    return (
        <div>
            <h1>View These Decks!</h1>
            <List>
                {currentDecks.map(deck => (
                        <Link to={`/decks/${deck.id}`} key={deck.id}>
                            <ListGroupItemHeading tag='h2' >{deck.title}</ListGroupItemHeading>
                            <ListGroupItem>{deck.description}</ListGroupItem>
                        </Link>
                ))}
            </List>
        </div>
    );
}

export default Decks;