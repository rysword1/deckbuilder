import React, { useState, useEffect } from "react";
// import DeckbuilderApi from "./Api";

function CardSearchForm({ cardSearch }) {

    const INITIAL_STATE = {
        name: "",
        colors: [],
        // type: null
    }


    const [formData, setFormData] = useState(INITIAL_STATE);

    let query = "?q=";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleChecks = (e) => {
        const {colors, value, checked} = e.target;
        if (checked) {
            setFormData({[colors]: [...colors, value]});
        } else {
            setFormData({[colors]: colors.filter((e) => e !== value)});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name !== "" && formData.colors !== null) {
            query = query + `name=${formData.name}+color:${formData.colors}`
        } else if (formData.name !== "") {
            query = query + `name=${formData.name}`
        } else if (formData.colors !=="") {
            query = query + `color:${formData.colors}`
        }
        console.log(query);
        cardSearch(query);
    }


    return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name: </label>
            <input id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange} />
        </div>

        <div>
            <label htmlFor="colors">Colors: </label>
            <input name="colors"
                type="checkbox"
                value="W"
                onChange={handleChecks} />
            <label htmlFor='W'>White</label>
            <input name="colors"
                type="checkbox"
                value="U"
                onChange={handleChecks} />
            <label htmlFor='U'>Blue</label>
            <input name="colors"
                type="checkbox"
                value="B"
                onChange={handleChecks} />
            <label htmlFor='B'>Black</label>
            <input name="colors"
                type="checkbox"
                value="R"
                onChange={handleChecks} />
            <label htmlFor='R'>Red</label>
            <input name="colors"
                type="checkbox"
                value="G"
                onChange={handleChecks} />
            <label htmlFor="C">Colorless</label> 
            <input name="colors"
                type="checkbox"
                value="C"
                onChange={handleChecks} />
            <label htmlFor="C">Colorless</label>
        </div>

        {/* <div>
            <label htmlFor="type">Type: </label>

            <input name="type"
                    type="checkbox"
                    value="Artifact"
                    onChange={handleChange} />
                <label htmlFor='Artifact'>Artifact</label>
                <input name="type"
                    type="checkbox"
                    value="Creature"
                    onChange={handleChange} />
                <label htmlFor='Creature'>Creature</label>
                <input name="type"
                    type="checkbox"
                    value="Enchantment"
                    onChange={handleChange} />
                <label htmlFor='Enchantment'>Enchantment</label>
                <input name="type"
                    type="checkbox"
                    value="Land"
                    onChange={handleChange} />
                <label htmlFor='Land'>Land</label>
                <input name="type"
                    type="checkbox"
                    value="BasicLand"
                    onChange={handleChange} />
                <label htmlFor='BasicLand'>Basic Land</label>
                <input name="type"
                    type="checkbox"
                    value="Legendary"
                    onChange={handleChange} />
                <label htmlFor='Legendary'>Legendary</label>
                <input name="type"
                    type="checkbox"
                    value="Planeswalker"
                    onChange={handleChange} />
                <label htmlFor='Planeswalker'>Planeswalker</label>
                <input name="type"
                    type="checkbox"
                    value="Sorcery"
                    onChange={handleChange} />
                <label htmlFor='Sorcery'>Sorcery</label>
                <input name="type"
                    type="checkbox"
                    value="Instant"
                    onChange={handleChange} />
                <label htmlFor='Instant'>Instant</label>
            </div> */}
            <button>Search</button>
        </form>
    );
}

export default CardSearchForm;