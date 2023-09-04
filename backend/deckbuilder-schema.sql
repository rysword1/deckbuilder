CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    date_created DATE,
    description TEXT,
    card_ids TEXT[] DEFAULT '{}'
);