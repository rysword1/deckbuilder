import React from 'react';
// import { Link } from "react-router-dom";

function Cards({ cards }) {
    return (
        <div>
            <h3>Search Cards!</h3>
            <form>
                <label for="name">Name: </label>
                <input type="text"
                       name="name"
                       placeholder="Name" />
                
                <label for="color">Color: </label>
                {/* <select type="color" multiple="multiple"> */}
                <select type="multiple">
                    <option value="">--Pick a color--</option>
                    <option value="W">White</option>
                    <option value="U">Blue</option>
                    <option value="B">Black</option>
                    <option value="R">Red</option>
                    <option value="G">Green</option>
                    <option value="">Colorless</option>
                </select>

                <label for="type">Type: </label>
                <select type="type">
                    <option value="">--Select an option</option>
                    <option value="Artifact">Artifact</option>
                    <option value="Creature">Creature</option>
                    <option value="Enchantment">Enchantment</option>
                    <option value="Land">Land</option>
                    <option value="Basic Land">Basic Land</option>
                    <option value="Legendary">Legendary</option>
                    <option value="Planeswalker">Planeswalker</option>
                    <option value="Sorcery">Sorcery</option>
                    <option value="Instant">Instant</option>
                </select>
            </form>
            <p>maybe show like 10 cards.</p>
            <ol>
                {cards.map(card => (
                    <li>
                        <div>
                            <img src={card.imageUrl} alt={card.name}/>
                            <button>Add to Deck</button>
                            {/* maybe something like a counter then add to deck */}
                            {/* if no imageUrl, show type, subtype, and text then the button */}
                        </div>
                        </li>
                ))}
            </ol>
        </div>
    );
}

export default Cards;