"use strict";

const { Client } = require("pg");

let db = new Client({
    user: "shingydingy", // default process.env.PGUSER || process.env.USER
    password: "password", //default process.env.PGPASSWORD
    host: "localhost", // default process.env.PGHOST
    database: "deckbuilder", // default process.env.PGDATABASE || user
    port: 5432 // default process.env.PGPORT
});

db.connect();

module.exports = db;