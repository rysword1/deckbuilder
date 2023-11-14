CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    date_created DATE,
    description TEXT,
    card_ids TEXT[] DEFAULT '{}'
);

CREATE TABLE users (
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1)
);

