import axios from "axios";

const mtg = "https://api.magicthegathering.io/v1/cards"


class DeckbuilderApi {

    static async getAllCards() {
        let result = await axios.get(`${mtg}`, {
            params: {
                "pageSize" : 25
            }
        });
        console.log(result);
        return result.data.cards;
    }


    // get all cards where json in body is {"name" : "some param"} and or
    // get all cards where json in body is {"colors" : "some param(s)" or "["some params", "some params"]} and or
    // get all cards where json in body is {"type" : "some param"}
    // return result.data.cards

    static async getCard() {
        let result = await axios.get(`${mtg}/b5a86869-617b-56ed-a91e-b37f52abc98f`);
        console.log(result);
        return result.data.card;
    }
    
}

export default DeckbuilderApi;