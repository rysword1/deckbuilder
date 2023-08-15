import axios from "axios";


const mtg = "http://api.scryfall.com/cards";


class DeckbuilderApi {

    // filter search on backend for specific number of cards instead of in the CardList component!!!!!!

    // get all cards where json in body is {"name" : "some param"} and or
    // get all cards where json in body is {"colors" : "some param(s)" or "["some params", "some params"]} and or
    // get all cards where json in body is {"type" : "some param"}
    // return result.data.cards
    static async cardSearch(name) {
        let result = await axios.get(`${mtg}/search`, {
            params: {
                name: name,
            }
        });
        return result.data.cards;
    }

    static async getAureliaCards() {
        let result = await axios.get(`https://api.scryfall.com/cards/search?order=name&q=aurelia`);
        console.log(result.data.data);
        return result.data.data;
    }

    static async getRandomCard() {
        let result = await axios.get(`${mtg}/random`);
        console.log(result);
        return result.data;
    }
    
}

export default DeckbuilderApi;