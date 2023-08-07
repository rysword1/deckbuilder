import React, { useState } from 'react';
import CardSearchForm from './CardSearchForm';
import Buttons from './Buttons';
// import DeckbuilderApi from './Api';
// import Deck from './Deck';


function Cards({ cards, updateSearch }) {

    // const INITIAL_STATE = {
    //     name: "",
    //     color: "",
    //     type: ""
    // }

    // const [formData, setFormData] = useState(INITIAL_STATE);
    // const [counter, setCoutner] = useState(0);

    // const increase = () => {
    //     if (counter < 4) {
    //         setCoutner(count => count + 1);
    //     }
    // }

    // const decrease = () => {
    //     if (counter > 0) {
    //         setCoutner(count => count - 1);
    //     }
    // }

    // on submit prevent reload (preventDefault())
    // clear form values (setFormData = INITIAL_STATE)
    // update search terms as needed (name, color, type)
    // complete the search for new cards using the values of name, color, type
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // DeckbuilderApi.getSearchCards({
    //     //     cardName : formData.name
    //     // });
    //     // console.log(cardName);
    //     setFormData(INITIAL_STATE);
    // }

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