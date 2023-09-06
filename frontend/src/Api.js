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
        result.data.side = 0;
        return result.data;
    }

    static async getCard(card_id) {
        let result = await axios.get(`${mtg}/${card_id}`);
        return result.data;
    }

    static async createDeck(title, description) {
        return axios.post(`http://localhost:3001/decks`, {
            title: title,
            description: description,
        }).then((result) => {
            return result;
        }).catch((err) => {
            console.error(err.message);
            return err.response;
        });
    }

    static async getAllDecks() {
        let result = await axios.get(`http://localhost:3001/decks`);
        return result.data.decks;
    }

    static async getDeckById(id) {
        let result = await axios.get(`http://localhost:3001/decks/${id}`);
        return result.data.deck;
    }

    static async updateDeckCards(id, deckCardIds) {
        console.log(id, deckCardIds);
        return axios.put(`http://localhost:3001/decks/${id}`, { 
            card_ids: deckCardIds
        }).then((result) => {
            return result;
        }).catch((err) => {
            return err.response;
        });
    }


    static async getRandDeck(rand) {
        let result = await axios.get(`http://localhost:3001/decks/${rand}`);
        return result.data.deck;
    }

    static async deleteDeck(id) {
        let result = await axios.delete(`http://localhost:3001/decks/${id}`);
        return result.data.deck;
    }
    
}

export default DeckbuilderApi;