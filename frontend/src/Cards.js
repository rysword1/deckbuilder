import React from 'react';
import CardSearchForm from './CardSearchForm';
import Buttons from './Buttons';


function Cards({ cards }) {

    return (
        <div>
            <h3>Search Cards!</h3>
            <CardSearchForm />
            <ol>
                {cards.map(card => (
                    ((card.imageUrl !== undefined) ?
                    (<li>
                        <div>
                            <img src={card.imageUrl} alt={card.name}/>
                            <Buttons />
                        </div>
                    </li>) :
                    null)
                ))}
            </ol>
        </div>
    );
}

export default Cards;