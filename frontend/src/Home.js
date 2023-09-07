import React from "react";
import { List, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import SingleCard from "./SingleCard";
import './App.css';
import { Link } from "react-router-dom";

function Home({ randCard, randDeck }) {

    

    return (
        <div>
            <h1 className='Welcome'>Welcome to MTG Deckbuiler!</h1>

            <h2>Check out this random deck!</h2>

            <List>
                <Link to={`decks/${randDeck.id}`}>
                    <ListGroupItemHeading>{randDeck.title}</ListGroupItemHeading>
                    <ListGroupItem>{randDeck.description}</ListGroupItem>
                </Link>
            </List>

            <h2>Check out this random card!</h2>

            <List>
                <SingleCard card={randCard} />
            </List>

        </div>
    );
}

export default Home;