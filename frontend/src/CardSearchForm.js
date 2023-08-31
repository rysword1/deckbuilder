import React, { useState } from "react";


function CardSearchForm({ cardSearch }) {

    const [formData, setFormData] = useState({
        name: "",
        colors: [],
        types: [],
        // dont make colorOptions an array it shouldnt be
        colorOptions: [],
        or: false
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
                ...formData,
                colors: [...colors, value]
            });
        } else {
            setFormData({
                ...formData,
                colors: colors.filter((e) => e !== value)
            });
        }
    }

    const handleTypesChecks = (e) => {
        const {value, checked} = e.target;
        const {types} = formData;

        console.log(`${value} is ${checked}`);

        if (checked) {
            setFormData({
                ...formData,
                types: [...types, value]
            });
        } else {
            setFormData({
                ...formData,
                types: types.filter((e) => e !== value)
            });
        }
    }

    // look at his function and decide what would be better if colorOptions is not an array
    const handleColorOptions = (e) => {
        console.log(`selected ${e.target.value}`);
        setFormData({
            ...formData,
            colorOptions: e.target.value
        });
    }

    const handleOrChecks = (e) => {
        const {value, checked} = e.target;
        formData.or = checked;

        console.log(`${value} is ${checked}`);

        setFormData(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

            if (formData.name) {
                query = query + `name=${formData.name}`;
            }

            if (formData.types.length > 0) {
                if (formData.or) {
                    query = query + `+(type:${formData.types.join('+OR+type:')})`;
                    console.log(query);
                } else {
                    query = query + `+(type:${formData.types.join('+type:')})`;
                    console.log(query);
                }
            }

            if (formData.colors.length > 0) {
                if (formData.colorOptions === "only") {
                    query = query + `+color=${formData.colors.join("")}`;
                } else if (formData.colorOptions === "at-most") {
                    query = query + `+color<=${formData.colors.join("")}`;
                } else if (formData.colorOptions === "including") {
                    query = query + `+color:${formData.colors.join("")}`;
                }
            }

        console.log(query);
        cardSearch(query);
        query = "?q=";
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

            <select name="color-options" id="color-options" onChange={handleColorOptions}>
                <option value="">---Select an Option---</option>
                <option value="only">Only</option>
                <option value="at-most">At Most</option>
                <option value="including">Including</option>
            </select>
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
                    value="land"
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

                <input name="or"
                    type="checkbox"
                    value="or"
                    onChange={handleOrChecks} />
                <label htmlFor='or'>Including These</label>
            </div>
            <button>Search</button>
        </form>
    );
}

export default CardSearchForm;