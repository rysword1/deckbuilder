import React from "react";


function Decks({ decks }) {
    
    return (
        <div>
            {decks.map(deck => (
                <ul>
                    <h3>
                        <li key={deck.title}>
                            <a href={`http://localhost:3000/decks/${deck.id}`}>
                                {deck.title}
                            </a>
                        </li>
                    </h3>
                </ul>
            ))}
        </div>
    );
}

export default Decks;