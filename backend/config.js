"use strict";

require('dotenv').config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || 'def-not-secret';

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
    ? "deckbuilder_test"
    : process.env.DATABASE_URL || "deckbuilder";
}

// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Deckbuilder Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
// console.log("BCRYPT_WORK_FACTOR:".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
    // BCRYPT_WORK_FACTOR,
    SECRET_KEY,
    PORT,
    getDatabaseUri
};