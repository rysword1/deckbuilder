"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");


class Deck {

    static async create({ title, date_created, description }) {
        const duplicateCheck = await db.query(
            `SELECT title
             FROM decks
             WHERE title = $1`,
        [title]);

        if (duplicateCheck.rows[0])
        throw new BadRequestError(`Duplicate deck: ${title}`);

        const result = await db.query(
            `INSERT INTO decks
             (title, date_created, description)
             VALUES ($1, $2, $3)
             RETURNING id, title, date_created, description`,
             [
                title,
                date_created,
                description,
             ],
        );
        return result.rows[0];
    }

    static async getAll(searchFilters = {}) {
        let searchQuery = `SELECT id,
                                  title,
                                  date_created,
                                  description,
                                  card_ids
                           FROM decks`;

        let where = [];
        let values = [];

        const { titleLike } = searchFilters;

        if (titleLike !== undefined) {
            values.push(`%${titleLike}%`);
            where.push(`title LIKE $${values.length}`);
        }

        if (where.length > 0) {
            searchQuery += " WHERE" + where.join( " AND ");
        }

        searchQuery += " ORDER BY title";
        console.log(searchQuery);

        const results = await db.query(searchQuery);
        return results.rows;
    }

    static async get(id) {
        const result = await db.query(
            `SELECT id,
                    title,
                    date_created,
                    description,
                    card_ids
             FROM decks
             WHERE id = $1`,
        [id]);

        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${id}`);

        return deck;
    }


    static async update(deckId, deckCardIds) {
        
        let sqlCardIdString = "'{" + deckCardIds.card_ids.join(",") + "}'";

        console.log(sqlCardIdString);
        const result = await db.query(`UPDATE decks
                                       SET card_ids = ${sqlCardIdString}
                                       WHERE id = ${deckId}
                                       RETURNING *`);
        console.log(result);

        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${deckId}`);
        
        return result.rows[0];
    }


    static async remove(id) {
        const result = await db.query(
            `DELETE
             FROM decks
             WHERE id = $1
             RETURNING id`,
        [id]);

        const deck = result.rows[0];
        
        if (!deck) throw new NotFoundError(`No deck: ${id}`);

        return deck;
    }
}

module.exports = Deck;