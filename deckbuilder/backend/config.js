"usestrict";

require('dotenv').config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || 'def-not-secret';

const PORT = +process.env.PORT || 5000;

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
    ? "deckbuilder_test"
    : process.env.DATABASE_URL || "deckbuilder";
}

// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
    // BCRYPT_WORK_FACTOR,
    SECRET_KEY,
    PORT,
    getDatabaseUri
};