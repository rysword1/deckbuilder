CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    date_created TEXT NOT NULL,
    descr TEXT,
    card_ids TEXT []
);