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
    
}

export default DeckbuilderApi;