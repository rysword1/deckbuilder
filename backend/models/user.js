"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

class User {

    static async create({username, first_name, last_name, email}) {
        const duplicateCheck = await db.query(
            `SELECT username
             FROM users
             WHERE username = $1`,
        [username]);

        if (duplicateCheck.rows[0])
        throw new BadRequestError(`Duplicate username: ${username}`);

        const result = await db.query(
            `INSERT INTO users
             (username, first_name, last_name, email)
             VALUES ($1, $2, $3)
             RETURNING username, first_name, last_name, email`,
             [
                username,
                first_name,
                last_name,
                email
             ]
        );
        
        return result.rows[0];
    }

    static async getAll(searchFilters = {}) {
        let searchQuery = `SELECT username
                           FROM users`;

        let where = [];
        let values = [];

        const { usernameLike } = searchFilters;

        if (usernameLike !== undefined) {
            values.push(`%${usernameLike}%`);
            where.push(`username LIKE $${values.length}`);
        }

        if (where.length > 0) {
            searchQuery += " WHERE" + where.join(" AND ");
        }

        searchQuery += " ORDER BY username";

        const results = await db.query(searchQuery);
        return results.rows;
    }

    static async get(username) {
        const result = await db.query(
            `SELECT username,
                    first_name,
                    last_name,
                    email
             FROM users
             WHERE username = $1`,
             [username]
        );

        const user = result.rows[0];

        if (!user) throw new NotFoundError(`No username: ${username}`);

        return user;
    }

    // static async update(password, first_name, last_name, email) {
    // }

    static async remove(username) {
        const result = await db.query(
            `DELETE
             FROM users
             WHERE id = $1
             RETURNING username`,
        [username]
        );

        const user = result.rows[0];

        if (!user) throw new NotFoundError(`No user: ${user}`);

        return user;
    }
}

module.exports = User;