CREATE TABLE decks (
    title VARCHAR(30) PRIMARY KEY CHECK (title = lower(title)),
    date_created TEXT NOT NULL,
    card_ids TEXT NOT NULL
);