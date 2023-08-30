CREATE TABLE decks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    date_created TEXT NOT NULL,
    card_ids TEXT []
);