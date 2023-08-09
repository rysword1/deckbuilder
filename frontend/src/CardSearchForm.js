import React, { useState } from "react";

function CardSearchForm({ search }) {

    const INITIAL_STATE = {
        name: "",
        colors: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        search(formData.name, formData.colors, formData.type);
        setFormData(INITIAL_STATE);
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
            <label htmlFor="colors">Color: </label>
            <input name="colors"
                type="checkbox"
                value="W"
                onChange={handleChange} />
            <label htmlFor='W'>White</label>

            <input name="colors"
                type="checkbox"
                value="U"
                onChange={handleChange} />
            <label htmlFor='U'>Blue</label>
            <input name="colors"
                type="checkbox"
                value="B"
                onChange={handleChange} />
            <label htmlFor='B'>Black</label>
            <input name="colors"
                type="checkbox"
                value="R"
                onChange={handleChange} />
            <label htmlFor='R'>Red</label>
            <input name="colors"
                type="checkbox"
                value="G"
                onChange={handleChange} />
            <label htmlFor='G'>Green</label>
        </div>

        <div>
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
            </div>
            <button>Search</button>
        </form>
    );
}

export default CardSearchForm;