import axios from "axios";

const mtg = "https://api.magicthegathering.io/v1/cards"


// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class DeckbuilderApi {

    static async getAllCards() {
        let result = await axios.get(`${mtg}`);
        console.log(result);
        return result.data.cards;
    }

    // get all cards where json in body is {"name" : "some param"} and or
    // get all cards where json in body is {"colors" : "some param(s)" or "["some params", "some params"]} and or
    // get all cards where json in body is {"type" : "some param"}
    // return result.data.cards

    static async getCard() {
        let result = await axios.get(`${mtg}/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c`);
        console.log(result);
        return result.data.card;
    }
    
}

export default DeckbuilderApi;