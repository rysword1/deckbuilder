import axios from "axios";

const mtg = "https://api.magicthegathering.io/v1/cards"


class DeckbuilderApi {

    static async getAllCards(name, colors, type) {
        let result = await axios.get(`${mtg}`, {
            params: {
                "pageSize" : 25,
                "name": name,
                "colors": colors,
                "type": type
            }
        });
        console.log(result);
        return result.data.cards;
    }

    // filter search on backend for specific number of cards instead of in the CardList component!!!!!!

    // get all cards where json in body is {"name" : "some param"} and or
    // get all cards where json in body is {"colors" : "some param(s)" or "["some params", "some params"]} and or
    // get all cards where json in body is {"type" : "some param"}
    // return result.data.cards
    static async search(name, colors, type) {
        let result = await axios.get(`https://api.magicthegathering.io/v1/cards`, {
            params: {
                "pageSize": 25,
                name: name,
                colors: colors,
                type: type
            }
        });
        return result.data.cards;
    }

    static async getCard() {
        let result = await axios.get(`${mtg}/b5a86869-617b-56ed-a91e-b37f52abc98f`);
        console.log(result);
        return result.data.card;
    }
    
}

export default DeckbuilderApi;