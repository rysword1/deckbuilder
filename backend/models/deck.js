"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");


class Deck {

    static async create({ id, title, dateCreated, descr, card_ids }) {
        const duplicateCheck = await db.query(
            `SELECT title
             FROM decks
             WHERE title = $1`,
        [title]);

        if (duplicateCheck.rows[0])
        throw new BadRequestError(`Duplicate deck: ${title}`);

        const result = await db.query(
            `INSERT INTO decks
             (id, title, date_created, card_id)
             VALUES ($1, $2, $3, $4)
             RETURNING id, title, date_created, card_ids`,
             [
                id,
                title,
                dateCreated,
                descr,
                card_ids
             ],
        );
        const deck = result.rows[0];

        return deck;
    }

    static async getAll(searchFilters = {}) {
        let searchQuery = `SELECT id,
                                  title,
                                  date_created,
                                  descr,
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
                    descr,
                    card_ids
             FROM decks
             WHERE id = $1`,
        [id]);

        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${id}`);

        return deck;
    }

    // static async update() {}

    static async remove(id) {
        const result = await db.query(
            `DELETE
             FROM decks
             WHERE title = $1
             RETURNING id`,
        [id]);
        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${id}`);
    }
}

module.exports = Deck;