import React, { useState } from "react";
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

    const handleColorsChecks = (e) => {
        const {value, checked} = e.target;
        const {colors} = formData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setFormData({
                colors: [...colors, value],
            });
        } else {
            setFormData({
                colors: colors.filter((e) => e !== value),
            });
        }
    }

    const handleTypesChecks = (e) => {
        const {value, checked} = e.target;
        const {types} = formData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setFormData({
                types: [...types, value]
            });
        } else {
            setFormData({
                types: types.filter((e) => e !== value)
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (formData.name !== undefined) {
        //     query = query + `name=${formData.name}`
        // }
        // if (formData.colors !== undefined) {
        //     query = query + `colors:${formData.colors}`
        // }
        // if (formData.types !== undefined) {
        //     query = query + `type=${formData.types}`
        // }


        // if (formData.name !== undefined && formData.colors !== undefined && formData.types !== undefined) {
        //     query = query + `name=${formData.name}+colors:${formData.colors}+type=${formData.types}`
        // } else if (formData.name !== undefined && formData.colors !== undefined) {
        //     query = query + `name=${formData.name}+colors:${formData.colors}`
        // } else if (formData.name !== undefined && formData.types !== undefined) {
        //     query = query + `name=${formData.name}+type=${formData.types}`
        // } else if (formData.colors !== undefined && formData.types !== undefined) {
        //     query = query + `colors:${formData.colors}+type=${formData.types}`
        // } else if (formData.name !== undefined) {
        //     query = query + `name=${formData.name}`
        // } else if (formData.colors !== undefined) {
        //     query = query + `colors:${formData.colors}`
        // } else if (formData.types !== undefined) {
        //     query = query + `type=${formData.types}`
        // }
        
        // QUERY FOR NAME
        // query = query + `name=${formData.name}`

        // QUERY FOR COLORS
        // query = query + `color:${formData.colors}`

        // QUERY FOR TYPES
        query = query + `type=${formData.types}`
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
                onChange={handleColorsChecks} />
            <label htmlFor='W'>White</label>
            <input name="colors"
                type="checkbox"
                value="U"
                onChange={handleColorsChecks} />
            <label htmlFor='U'>Blue</label>
            <input name="colors"
                type="checkbox"
                value="B"
                onChange={handleColorsChecks} />
            <label htmlFor='B'>Black</label>
            <input name="colors"
                type="checkbox"
                value="R"
                onChange={handleColorsChecks} />
            <label htmlFor='R'>Red</label>
            <input name="colors"
                type="checkbox"
                value="G"
                onChange={handleColorsChecks} />
            <label htmlFor="G">Green</label> 
            <input name="colors"
                type="checkbox"
                value="C"
                onChange={handleColorsChecks} />
            <label htmlFor="C">Colorless</label>
            {/* <input name="colors"
                type="checkbox"
                value="="
                onChange={handleChecks} />
            <label htmlFor="=">And</label>  */}
        </div>

        <div>
            <label htmlFor="types">Type: </label>

            <input name="types"
                    type="checkbox"
                    value="artifact"
                    onChange={handleTypesChecks} />
                <label htmlFor='Artifact'>Artifact</label>
                <input name="types"
                    type="checkbox"
                    value="creature"
                    onChange={handleTypesChecks} />
                <label htmlFor='Creature'>Creature</label>
                <input name="types"
                    type="checkbox"
                    value="enchantment"
                    onChange={handleTypesChecks} />
                <label htmlFor='Enchantment'>Enchantment</label>
                <input name="types"
                    type="checkbox"
                    value="Land"
                    onChange={handleTypesChecks} />
                <label htmlFor='Land'>Land</label>
                <input name="types"
                    type="checkbox"
                    value="basic"
                    onChange={handleTypesChecks} />
                <label htmlFor='BasicLand'>Basic Land</label>
                <input name="types"
                    type="checkbox"
                    value="legendary"
                    onChange={handleTypesChecks} />
                <label htmlFor='Legendary'>Legendary</label>
                <input name="types"
                    type="checkbox"
                    value="planeswalker"
                    onChange={handleTypesChecks} />
                <label htmlFor='Planeswalker'>Planeswalker</label>
                <input name="types"
                    type="checkbox"
                    value="sorcery"
                    onChange={handleTypesChecks} />
                <label htmlFor='Sorcery'>Sorcery</label>
                <input name="types"
                    type="checkbox"
                    value="instant"
                    onChange={handleTypesChecks} />
                <label htmlFor='Instant'>Instant</label>
            </div>
            <button>Search</button>
        </form>
    );
}

export default CardSearchForm;