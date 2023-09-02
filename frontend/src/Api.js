import axios from "axios";


const mtg = "http://api.scryfall.com/cards";

class DeckbuilderApi {

    static async cardSearch(name) {
        let result = await axios.get(`${mtg}/search`, {
            params: {
                name: name,
            }
        });
        return result.data.cards;
    }

    static async getRandomCard() {
        let result = await axios.get(`${mtg}/random`);
        return result.data;
    }

    static async getCard(card_id) {
        let result = await axios.get(`${mtg}/${card_id}`);
        return result.data;
    }

    static async getAllDecks() {
        let result = await axios.get(`http://localhost:3001/decks`);
        return result.data.decks;
    }

    static async getDeckById(id) {
        let result = await axios.get(`http://localhost:3001/decks/${id}`);
        return result.data.deck;
    }

    static async getRandDeck(rand) {
        let result = await axios.get(`http://localhost:3001/decks/${rand}`);
        return result.data.deck;
    }

    static async deleteDeck(id) {
        let result = await axios.delete(`http://localhost:3001/decks/${id}`)
        return result.data.decks;
    }
    
}

export default DeckbuilderApi;