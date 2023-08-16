"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");


class Deck {

    static async create({ title, dateCreated, card_ids }) {
        const duplicateCheck = await db.query(
            `SELECT title
             FROM decks
             WHERE title = $1`,
        [title]);

        if (duplicateCheck.rows[0])
        throw new BadRequestError(`Duplicate deck: ${title}`);

        const result = await db.query(
            `INSERT INTO decks
             (title, date_created, card_id)
             VALUES ($1, $2, $3, )
             RETURNING title, date_created AS "dateCreated", card_ids`,
             [
                title,
                dateCreated,
                card_ids
             ],
        );
        const deck = result.rows[0];

        return deck;
    }

    static async getAll(searchFilters = {}) {
        let searchQuery = `SELECT title, date_created AS dateCreated, card_ids
                           FROM decks`;
        let where = [];
        let values = [];

        const { titleLike } = searchFilters;

        if (titleLike) {
            values.push(`%${titleLike}%`)
            where.push(`title ILIKE $${values.length}`);
        }

        searchQuery += `ORDER BY title`;

        const results = await db.query(searchQuery, values);
        return results.rows;
    }

    static async get(title) {
        const result = await db.query(
            `SELECT title, date_created AS "dateCreated, card_ids
             FROM decks
             WHERE title = $1`,
        [handle]);

        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${title}`);

        return deck;
    }

    // static async update() {}

    static async remove(title) {
        const result = await db.query(
            `DELETE
             FROM decks
             WHERE title = $1
             RETURNING title`,
        [title]);
        const deck = result.rows[0];

        if (!deck) throw new NotFoundError(`No deck: ${title}`);
    }
}

module.exports = Deck;