import React, { useState, useEffect } from "react";
// import DeckbuilderApi from "./Api";

function CardSearchForm({ cardSearch }) {

    // const INITIAL_STATE = {
    //     name: "",
    //     colors: [],
    //     // type: null
    // }


    const [formData, setFormData] = useState({
        // name: "",
        colors: [],
        types: []
    });

    let query = "?q=";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleChecks = (e) => {
        const {value, checked} = e.target;
        const {colors} = formData;
        const {types} = formData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setFormData({
                colors: [...colors, value],
                types: [...types, value]
            });
        } else {
            setFormData({
                colors: colors.filter((e) => e !== value),
                types: types.filter((e) => e !== value)
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (formData.name !== "" && formData.colors !== "") {
        //     query = query + `name=${formData.name}+color:${formData.colors}`
        // } else if (formData.name !== "") {
        //     query = query + `name=${formData.name}`
        // } else if (formData.colors !=="") {
        //     query = query + `color:${formData.colors}`
        // }
        
        // QUERY FOR NAME
        // query = query + `name=${formData.name}`

        // QUERY FOR COLORS
        // query = query + `color:${formData.colors}`

        // QUERY FOR TYPES
        query = query + `type:${formData.types}`
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
            <label htmlFor="G">Green</label> 
            <input name="colors"
                type="checkbox"
                value="C"
                onChange={handleChecks} />
            <label htmlFor="C">Colorless</label>
        </div>

        <div>
            <label htmlFor="types">Type: </label>

            <input name="types"
                    type="checkbox"
                    value="artifact"
                    onChange={handleChecks} />
                <label htmlFor='Artifact'>Artifact</label>
                <input name="types"
                    type="checkbox"
                    value="creature"
                    onChange={handleChecks} />
                <label htmlFor='Creature'>Creature</label>
                <input name="types"
                    type="checkbox"
                    value="enchantment"
                    onChange={handleChecks} />
                <label htmlFor='Enchantment'>Enchantment</label>
                <input name="types"
                    type="checkbox"
                    value="Land"
                    onChange={handleChecks} />
                <label htmlFor='Land'>Land</label>
                <input name="types"
                    type="checkbox"
                    value="basic"
                    onChange={handleChecks} />
                <label htmlFor='BasicLand'>Basic Land</label>
                <input name="types"
                    type="checkbox"
                    value="legendary"
                    onChange={handleChecks} />
                <label htmlFor='Legendary'>Legendary</label>
                <input name="types"
                    type="checkbox"
                    value="planeswalker"
                    onChange={handleChecks} />
                <label htmlFor='Planeswalker'>Planeswalker</label>
                <input name="types"
                    type="checkbox"
                    value="sorcery"
                    onChange={handleChecks} />
                <label htmlFor='Sorcery'>Sorcery</label>
                <input name="types"
                    type="checkbox"
                    value="instant"
                    onChange={handleChecks} />
                <label htmlFor='Instant'>Instant</label>
            </div>
            <button>Search</button>
        </form>
    );
}

export default CardSearchForm;