import axios from "axios";


const mtg = "http://api.scryfall.com/cards";

let rand = Math.floor(Math.random() * 2);


class DeckbuilderApi {

    static async cardSearch(name) {
        let result = await axios.get(`${mtg}/search`, {
            params: {
                name: name,
            }
        });
        return result.data.cards;
    }

    static async getAureliaCards() {
        let result = await axios.get(`https://api.scryfall.com/cards/search?order=name&q=aurelia+color=WR`);
        return result.data.data;
    }

    static async getRandomCard() {
        let result = await axios.get(`${mtg}/random`);
        return result.data;
    }

    static async getAllDecks() {
        let result = await axios.get(`http://localhost:3001/decks`);
        console.log(result);
        return result.data.decks;
    }

    static async getDecksByTitle(id) {
        let result = await axios.get(`http://localhost:3001/decks/${id}`);
        return result.data.decks;
    }

    static async getCardImgs(card_id) {
        let result = await axios.get(`http://${mtg}/cards/${card_id}`);
        console.log(result);
        return result.data.data;
    }

    static async getRandDeck(id) {
        let result = await axios.get(`http://localhost:3001/decks/${id}`);
        console.log(result);
        return result;
    }
    
}

export default DeckbuilderApi;