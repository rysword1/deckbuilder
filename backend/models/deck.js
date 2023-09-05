"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
// const { sqlForPartialUpdate } = require("../helpers/sql");


class Deck {

    static async create({ title, date_created, description, card_ids }) {
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
            values.push(`%${titleLike}%`)
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

    // static async update(id, data) {
    //     const { setCols, values } = sqlForPartialUpdate(
    //         data,
    //         {
    //             title: "title",
    //             date_created: "date_created",
    //             description: "description",
    //             card_ids: []
    //         });
        
    //     const handleVarIdx = "$" + (values.length + 1);

    //     const querySql = `UPDATE decks
    //                       SET ${setCols}
    //                       WHERE id = ${handleVarIdx}
    //                       RETURNING id,
    //                                 title,
    //                                 date_created,
    //                                 description,
    //                                 card_ids`;

    //     // UPDATE decks set card_ids = '{"e882c9f9-bf30-46b6-bedc-379d2c80e5cb", "0321b706-87b0-4bea-89d3-ec2e7252dc7c"}' WHERE id = 1 RETURNING id, title, date_created, description, card_ids;
    //     const result = await db.query(querySql, [...values, id]);

    //     if (!result.rows[0]) throw new NotFoundError(`No deck: ${id}`);

    //     return result.rows[0];
    // }

    static async update(deckId, cardIds) {
        const result = await db.query(`UPDATE decks
                                       SET card_ids = (ARRAY ${cardIds})
                                       WEHRE id = ${deckId}
                                       RETURNING id,
                                                 title,
                                                 date_created
                                                 description,
                                                 card_ids`);

        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${id}`);
        
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