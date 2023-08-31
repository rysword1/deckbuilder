import React from "react";

function ViewDeckForm() {

    const [formData, setFormData] = useState({
        title: ""
    });

    const handleChange = (e) => {
        const { title, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [title]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // search for decks with title
        // go to /decks with all decks that include the title
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Search for a Deck</h2>
            <div>
                <label htmlFor="title">Title: </label>

                <input id="title"
                    type="text"
                    name="title"
                    placeholder="Deck Title"
                    value={formData.title}
                    onChange={handleChange} />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default ViewDeckForm;