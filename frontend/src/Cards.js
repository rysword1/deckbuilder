import React, { useState} from 'react';
// import DeckbuilderApi from './Api';


function Cards({ cards, updateSearch }) {

    const INITIAL_STATE = {
        name: "",
        color: "",
        type: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // on submit prevent reload (preventDefault())
    // clear form values (setFormData = INITIAL_STATE)
    // update search terms as needed (name, color, type)
    // complete the search for new cards using the values of name, color, type
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <h3>Search Cards!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name"
                       type="text"
                       name="name"
                       placeholder="Name"
                       value={formData.name}
                       onChange={handleChange} />
                
                <label htmlFor="color">Color: </label>
                {/* <select type="color" multiple="multiple"> */}
                <select type="multiple" onChange={handleChange}>
                    <option value="">--Pick a color--</option>
                    <option value="W">White</option>
                    <option value="U">Blue</option>
                    <option value="B">Black</option>
                    <option value="R">Red</option>
                    <option value="G">Green</option>
                    <option value="">Colorless</option>
                </select>

                <label htmlFor="type">Type: </label>
                <select type="type" onChange={handleChange}>
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
                <button>Search</button>
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